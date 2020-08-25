<?php

return [
    'columnHeroImage' => [
        'displayName' => 'Column Hero Image',
        'transforms' => [
            ['width' => 400],
            ['width' => 600],
            ['width' => 800],
            ['width' => 1200],
            ['width' => 1500],
            ['width' => 1800],
        ],
        'defaults' => [
            'jpegQuality' => 75,
        ],
    ],
    'columnHeroImageWebp' => [
        'displayName' => 'Column Hero Image',
        'transforms' => [
            ['width' => 400],
            ['width' => 600],
            ['width' => 800],
            ['width' => 1200],
            ['width' => 1500],
            ['width' => 1800],
        ],
        'defaults' => [
            'format' => 'webp'
        ],
    ],
];
