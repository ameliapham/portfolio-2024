/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-namespace */

import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { assert } from "tsafe/assert";
import { id } from "tsafe/id";
import { useFixedScrollOnElement } from "./useFixedScrollOnElement";
import { useWindowInnerHeight } from "../useWindowInnerHeight";
import { Evt, type StatefulEvt } from "evt";

type State = State.Enabled | State.Disabled;

namespace State {
  export type Enabled = {
    isEnabled: true;
    height: number;
    initialScrollPercentage: number;
    evtCurrentScrollPercentage: StatefulEvt<number>;
  };

  export type Disabled = {
    isEnabled: false;
  };
}

type ContextValue = {
  state: State;
  setState: (state: State) => void;
};

const context = createContext<ContextValue | undefined>(undefined);

export function FixedScrollProvider(props: { children: React.JSX.Element }) {
  const { children } = props;

  const [state, setState] = useState<State>(() =>
    id<State.Disabled>({ isEnabled: false })
  );

  return (
    <context.Provider value={{ state, setState }}>
      <FixedScrollProviderInner>{children}</FixedScrollProviderInner>
    </context.Provider>
  );
}

function FixedScrollProviderInner(props: { children: React.JSX.Element }) {
  const { children } = props;

  const { state } = useContextValue();

  if (!state.isEnabled) {
    return children;
  }

  return (
    <FixedScrollProviderInnerAssertIsEnabled>
      {children}
    </FixedScrollProviderInnerAssertIsEnabled>
  );
}

function FixedScrollProviderInnerAssertIsEnabled(props: {
  children: React.JSX.Element;
}) {
  const { children } = props;

  const { state } = useContextValue();

  assert(state.isEnabled);

  const { rootElementId, scrollPercentage } = useFixedScrollOnElement({
    height: state.height,
    initialScrollPercentage: state.initialScrollPercentage,
  });

  useEffect(() => {
    state.evtCurrentScrollPercentage.state = scrollPercentage;
  }, [scrollPercentage, state.evtCurrentScrollPercentage]);

  return (
    <div id={rootElementId}>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100%",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function useContextValue(): ContextValue {
  const contextValue = useContext(context);

  assert(contextValue !== undefined);

  return contextValue;
}

function useEnableFixedScroll(params: {
  height: number;
  initialScrollPercentage: number;
}) {
  const { height, initialScrollPercentage } = params;

  const { setState } = useContextValue();

  useEffect(() => {

    const evtCurrentScrollPercentage= Evt.create(initialScrollPercentage);

    const ctx = Evt.newCtx();

    evtCurrentScrollPercentage.attach(ctx, (percentage) => {
      setCurrentScrollPercentage(percentage);
    });

    setState({
      isEnabled: true,
      height,
      initialScrollPercentage,
      evtCurrentScrollPercentage,
    });

    return () => {
      ctx.done();
      setState({
        isEnabled: false,
      });
    };
  }, [height, initialScrollPercentage]);

  const [currentScrollPercentage, setCurrentScrollPercentage] = useState(
    initialScrollPercentage
  );

  return { currentScrollPercentage };
}

export function useEnableFixedScrollBySections(params: {
  sectionCount: number;
  initialSectionIndex: number;
  onSectionChange: (sectionIndex: number) => void;
}) {
  const { sectionCount, initialSectionIndex, onSectionChange } = params;


  const { windowInnerHeight } = useWindowInnerHeight();

  const [initialScrollPercentage, setInitialScrollPercentage] = useState(() =>
    getScrollPercentage({ sectionCount, sectionIndex: initialSectionIndex })
  );


  const { currentScrollPercentage } = useEnableFixedScroll({
    height: windowInnerHeight + (windowInnerHeight / 2) * sectionCount,
    initialScrollPercentage,
  });

  const currentSectionIndex = useMemo(
    () =>
      getSectionIndex({
        scrollPercentage: currentScrollPercentage,
        sectionCount,
      }),
    [currentScrollPercentage, sectionCount]
  );

  useEffect(
    ()=> {

      if( currentSectionIndex === initialSectionIndex ){
        return;
      }

      setInitialScrollPercentage(
        getScrollPercentage({
          sectionCount,
          sectionIndex: initialSectionIndex,
        })
      );

    },
    [initialSectionIndex]
  );

  useEffect(() => {
    onSectionChange(currentSectionIndex);
  }, [currentSectionIndex]);
}

export function useIsFixedScrollEnabled() {
  const { state } = useContextValue();

  const isFixedScrollEnabled = state.isEnabled;

  return { isFixedScrollEnabled };
}

function getSectionIndex(params: {
  scrollPercentage: number;
  sectionCount: number;
}): number {
  const { scrollPercentage, sectionCount } = params;

  /*
    Let's say we have 5 sections.

    0% to 10% => sectionIndex 0 // The first section is a special case.
    91% to 100% => sectionIndex 4 // The last section is a special case.

    There is 80% of the scrollable area left for the 3 remaining sections.

    Percentage by section: 80 / 3 = 26.6

    10% (10 + 0 * 26.6) to 36.6% (10 + 1 * 26.6) => sectionIndex 1
    36.6% (10 + 1 * 26.6) to 63.2% (10 + 2 * 26.6) => sectionIndex 2
    63.2% (10 + 2 * 26.6) to 89.8% (10 + 3 * 26.6) => sectionIndex 3

  */

  if (scrollPercentage < 10) {
    return 0;
  }

  const delta = 80 / (sectionCount - 2);

  for (let i = 1; i <= sectionCount - 2; i++) {
    if (scrollPercentage < 10 + i * delta) {
      return i;
    }
  }

  return sectionCount - 1;
}

function getScrollPercentage(params: {
  sectionIndex: number;
  sectionCount: number;
}): number {
  const { sectionCount, sectionIndex } = params;

  for (let scrollPercentage = 0; scrollPercentage <= 99; scrollPercentage++) {
    if (getSectionIndex({ scrollPercentage, sectionCount }) === sectionIndex) {
      return scrollPercentage + 1;
    }
  }

  assert(false);
}

/*
{

  const sectionCount = 5;

  for( const currentScrollPercentage of (new Array(100).fill(undefined).map((_, i) => i)) ){

    console.log({ currentScrollPercentage, "sectionIndex": getSectionIndex({ currentScrollPercentage, sectionCount }) });

  }

}
  */