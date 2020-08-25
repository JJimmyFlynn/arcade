<?php

return [
    'elements' => [
        [
            'elementType' =>  \craft\elements\Entry::class,
            'criteria' => [
                'section' => 'homepage',
            ],
            'fields' => ['homeHeroImageLeft', 'homeHeroImageRight'],
            'transforms' => ['columnHeroImage', 'columnHeroImageWebp'],
        ],
    ],
];
