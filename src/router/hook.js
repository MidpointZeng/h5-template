// 全局前置守卫
const beforeEach = (to, from, next) => {
  next();
};

// 全局解析守卫
const beforeResolve = (to, from, next) => {
  next();
};

// 全局后置守卫
const afterEach = () => {};

export { afterEach, beforeEach, beforeResolve };
