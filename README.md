# nest.js 基础框架

## TODO

- [x] mongo db集成
- [x] log日志改造
- [x] 全局异常捕获
- [ ] redis 集成
- [ ] rebittMq 集成
- [ ] jwt验证
- [ ] consul集成

## 目录结构

```
--目录结构--
├─.env
├─.eslintrc.js
├─.gitignore
├─.prettierrc
├─nest-cli.json
├─package-lock.json
├─package.json
├─README.md
├─tree.txt
├─tsconfig.build.json
├─tsconfig.json
├─src
|  ├─app.controller.spec.ts
|  ├─app.controller.ts
|  ├─app.module.ts
|  ├─app.service.ts
|  ├─main.ts
|  ├─utils
|  |   ├─DateUtil.ts
|  |   ├─Log4jsUtil.ts
|  |   └Util.ts
|  ├─sysAdmin
|  |    ├─sysAdmin.controller.ts
|  |    ├─sysAdmin.module.ts
|  |    ├─sysAdmin.providers.ts
|  |    ├─sysAdmin.service.ts
|  |    ├─schemas
|  |    |    └sysAdmin.schemas.ts
|  |    ├─dto
|  ├─mongoDb
|  |    ├─mongo.module.ts
|  |    └mongo.providers.ts
|  ├─module
|  |   ├─global
|  |   |   └global.module.ts
|  ├─middleware
|  |     ├─logger.middleware.spec.ts
|  |     └logger.middleware.ts
|  ├─interface
|  ├─interceptor
|  |      ├─logger.interceptor.spec.ts
|  |      └logger.interceptor.ts
|  ├─helper
|  ├─filter
|  |   ├─any-exception.filter.spec.ts
|  |   └any-exception.filter.ts
|  ├─config
|  |   └log4js.config.ts
|  ├─base
|  |  ├─BaseService.ts
|  |  ├─message
|  |  |    ├─service
|  |  |    |    └message.service.ts
|  |  |    ├─interfaces
|  |  |    |     └message.interface.ts
|  |  ├─config
|  |  |   └config.service.ts
├─app-log
|    ├─request
|    |    └request.2020-09-23.log
|    ├─errors
|    |   └error.2020-09-23.log
|    ├─access
|    |   └access.2020-09-23.log
​```
```
