<?php

namespace Theme\Containers;

use Plenty\Plugin\Templates\Twig;

class ThemeFooterContainer
{
    public function call(Twig $twig):string
    {
        return $twig->render('Theme::content.ThemeFooter');
    }
}
