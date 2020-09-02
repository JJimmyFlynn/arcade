<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

return [
    // Global settings
    '*' => [
        // Default Week Start Day (0 = Sunday, 1 = Monday...)
        'defaultWeekStartDay' => 1,
        'omitScriptNameInUrls' => true,
        'cpTrigger' => 'admin',
        'securityKey' => getenv('SECURITY_KEY'),
        'useProjectConfigFile' => true,
        'allowAdminChanges' => false,
        'allowUpdates' => false,
        'errorTemplatePrefix' => 'errors/',
        'cacheDuration' => 0,
    ],

    // Dev environment settings
    'dev' => [
        // Dev Mode (see https://craftcms.com/guides/what-dev-mode-does)
        'devMode' => true,
        'allowAdminChanges' => true,
        'enableTemplateCaching' => false,
        'allowUpdates' => true,
        'cacheDuration' => 1,
    ],

    // Staging environment settings
    'staging' => [
    ],

    // Production environment settings
    'production' => [
    ],
];
