# User IP Location for Flarum
only display city and country, modified by pplulee

## Install

```sh
composer require pplulee/flarum-userip:"*"
php flarum migrate
```

## Update

```sh
composer update pplulee/flarum-userip:"*"
php flarum cache:clear
php flarum migrate
```

## Remove

```sh
composer remove pplulee/flarum-userip
php flarum cache:clear
```

## How to use

You just need to open the plugin in the background. :)

## Feature

- Support for websites using CDN
- Concise, detailed, understandable style
- No bugs (maybe?)

## Extending

You can easily extend this extension to support different API providers, if you follow these steps:

- In your new extension, require `pplulee/flarum-userip` as a dependency
- Define a new Service that implements `GBCLStudio\GeoIp\Api\GeoIpInterface`
- In your new extension's extend.php, register the service: `new GBCLStudio\GeoIp\Extend\ApiProvider(MyNewService::class);`
- Provide the required translations under the `gbcl-userip` namespace, for example: `gbcl-userip.admin.service.YOUR_NEW_EXTENSION.label`, specific translations The text can be found at [here](https://github.com/GBCLStudio/userip/blob/502fcd12dca2a07c29fc5b008026fb5b615dc246/resources/locale/en.yml#L9)

## Note

Builtin IP domain API is provided by [ip.sb](https://ip.sb)

Referenced code from the following projects: fof/geoip, fof/oauth

Support my work at [afdian 爱发电](http://afd.gbclstudio.cn)
