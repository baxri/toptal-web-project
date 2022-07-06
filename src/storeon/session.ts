import { StoreonModule } from "storeon";
import { useStoreon } from "storeon/react";

import Shared from "../shared";

const KEY = "session";

interface StateValues {
  accessToken?: string;
  refreshToken?: string;
}

interface State {
  [KEY]: StateValues;
}

interface Events {
  "session/set": StateValues;
  "session/clear": void;
}

const INITIAL_STATE: StateValues = {
  accessToken: undefined,
  refreshToken: undefined,
};

const module: StoreonModule<State, Events> = (store) => {
  store.on("@init", () => ({
    [KEY]: INITIAL_STATE,
  }));
  store.on("session/set", (state, payload) => ({
    [KEY]: payload,
  }));
  store.on("session/clear", () => ({
    [KEY]: INITIAL_STATE,
  }));
};

function getState(): StateValues {
  return Shared.getStore()?.get()?.[KEY];
}

function getAccessToken() {
  return getState()?.accessToken;
}

function useSession() {
  const { [KEY]: state, dispatch } = useStoreon<State>(KEY);

  return {
    accessToken: state.accessToken,
    authenticated: !!state.accessToken,
    setAccessToken: (payload: StateValues) => {
      dispatch("session/set", payload);
    },
    clear: () => {
      dispatch("session/clear");
    },
  };
}

export { KEY, module, useSession, getAccessToken };
