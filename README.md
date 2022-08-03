# Magento 2 project
- Magento 2 training

##  Requirement

- NodeJS 16 or higher

- Composer 1.10.x or higher

- PHP 7.3 or higher

## How to setup

- `git@github.com:huy3001/magento2.git`

- `cd magento2`

- `composer install`

- `bin/magento setup:install --base-url=http://magento2.local --db-host=localhost --db-name=magento2 --db-user=user --db-password=password --admin-firstname=admin --admin-lastname=admin --admin-email=admin@admin.com --admin-user=admin --admin-password=admin123 --language=en_US --currency=USD --timezone=America/Chicago --use-rewrites=1`

- `bin/magento setup:upgrade`

- `bin/magento deploy:mode:set developer`

## Reference

- https://docs.hyva.io/doc/2-building-your-theme-YQXK7w0jUe
- https://docs.hyva.io/doc/generating-css-F7oXlTBEdn
- https://devdocs.magento.com/guides/v2.4/install-gde/composer.html
- https://devdocs.magento.com/guides/v2.4/frontend-dev-guide/themes/theme-create.html
