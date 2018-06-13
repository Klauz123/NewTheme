<?php

namespace Theme\Providers;

use IO\Helper\TemplateContainer;
use IO\Extensions\Functions\Partial;
use Plenty\Plugin\Events\Dispatcher;
use Plenty\Plugin\ServiceProvider;
use Plenty\Plugin\Templates\Twig;

use IO\Helper\ResourceContainer;
class ThemeServiceProvider extends ServiceProvider
{

	/**
	 * Register the service provider.
	 */
	public function register()
	{

	}

    /**
	 * Boot a template for the footer that will be displayed in the template plugin instead of the original footer.
	 */
	public function boot(Twig $twig, Dispatcher $eventDispatcher)
    {
        $eventDispatcher->listen('IO.init.templates', function(Partial $partial)
        {
           $partial->set('footer', 'Theme::content.ThemeFooter');
					 $partial->set('navigation', 'Theme::content.ThemeHeaderNavigation');

					 $partial->set('header', 'Theme::content.ThemeHeader');




        }, 0);
        return false;

				$eventDispatcher->listen('IO.Resources.Import', function (ResourceContainer $container)
			{
					// The script is imported in the Footer.twig of Ceres
					$container->addScriptTemplate('Theme::content.script');
			}, self::PRIORITY);

    }
}
