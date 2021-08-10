import Koa from 'koa';

export type KoaContext = Koa.ParameterizedContext<Koa.DefaultState, Koa.DefaultContext>;
