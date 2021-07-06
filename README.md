# Check Hyva

Check Hyva theme and try to integrate current Icko design

##  Requirement

NodeJS 16 or higher
Composer 1.10.x or higher
PHP 7.3 or higher

## How to setup

`git@git.sutunam.com:nguyenconghuy/check-hyva.git`

`cd check-hyva`

`composer install`

`bin/magento setup:install --base-url=http://check-hyva.local --db-host=localhost --db-name=check-hyva --db-user=user --db-password=password --admin-firstname=admin --admin-lastname=admin --admin-email=admin@admin.com --admin-user=admin --admin-password=admin123 --language=en_US --currency=USD --timezone=America/Chicago --use-rewrites=1`

`bin/magento setup:upgrade`

`bin/magento deploy:mode:set developer`

`rm -rf var/view_preprocessed pub/static/frontend`

`bin/magento setup:static-content:deploy en_US -t Sutunam/hyva -f`

`cd app/design/frontend/Sutunam/hyva/web/tailwind`

`npm install`

## Command lines

- Please run this command lines in theme folder

- `cd app/design/frontend/Sutunam/hyva/web/tailwind` 

- Run development mode and build assets

- `npm run build-dev`

- Build and run production mode

- `npm run build-prod`

- After build you will need to deploy static content again to see the change.

- `rm -rf var/view_preprocessed pub/static/frontend`

- `bin/magento setup:static-content:deploy en_US -t Sutunam/hyva -f`

## Reference

- https://docs.hyva.io/doc/2-building-your-theme-YQXK7w0jUe
- https://docs.hyva.io/doc/generating-css-F7oXlTBEdn
- https://devdocs.magento.com/guides/v2.4/install-gde/composer.html
- https://devdocs.magento.com/guides/v2.4/frontend-dev-guide/themes/theme-create.html
