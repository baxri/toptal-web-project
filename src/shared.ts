enum Service {
  Store,
}

const services = new Map<Service, any>();

function setStore(store: any) {
  services.set(Service.Store, store);
}

function getStore(): any {
  return services.get(Service.Store);
}

const shared = {
  setStore,
  getStore,
};

export default shared;
