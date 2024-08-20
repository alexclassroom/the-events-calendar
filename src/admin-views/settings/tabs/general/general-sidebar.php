<?php
/**
 * Sidebar for the general settings tab.
 *
 * @since TBD
 */

declare( strict_types=1 );

use TEC\Common\Admin\Entities\Br;
use TEC\Common\Admin\Entities\Field_Wrapper;
use TEC\Common\Admin\Entities\Heading;
use TEC\Common\Admin\Entities\Image;
use TEC\Common\Admin\Entities\Link;
use TEC\Common\Admin\Entities\Paragraph;
use TEC\Common\Admin\Entities\Plain_Text;
use TEC\Common\Admin\Settings_Section;
use TEC\Common\Admin\Settings_Sidebar;
use Tribe\Utils\Element_Attributes;

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

$break = new Br();

$sidebar = new Settings_Sidebar();
$sidebar->set_header_image(
	new Image(
		'https://example.com/image.jpg', // todo: real image here.
		new Element_Attributes(
			[
				'alt'  => '',
				'role' => 'presentation',
			]
		)
	)
);

$sidebar->set_title( new Heading( __( 'Finding and extending your calendar', 'tribe-common' ), 2 ) );
$sidebar->add_section(
	( new Settings_Section() )
		->add_elements(
			[
				( new Paragraph() )->add_child(
					new Plain_Text( __( 'Looking for additional functionality including recurring events, custom meta, community events, ticket sales, and more?', 'tribe-common' ) )
				),
				new Link(
					'https://example.com/add-ons', // todo: real link here.
					__( 'Check out the available add-ons.', 'tribe-common' )
				),
			]
		)
);

$sidebar->add_section(
	( new Settings_Section() )
		->set_title( new Heading( __( 'Documentation', 'tribe-common' ), 3 ) )
		->add_elements(
			[
				new Link(
					'https://example.com/welcome-page', // todo: real link here.
					__( 'View Welcome Page', 'tribe-common' )
				),
				$break,
				new Link(
					'https://example.com/getting-started', // todo: real link here.
					__( 'Getting started guide', 'tribe-common' )
				),
				$break,
				new Link(
					'https://example.com/knowledgebase', // todo: real link here.
					__( 'Knowledgebase', 'tribe-common' )
				),
			]
		)
);

$sidebar->add_section(
	( new Settings_Section() )
		->add_elements(
			[
				( new Paragraph() )->add_child(
					new Plain_Text( __( 'Where is my calendar?', 'tribe-common' ) )
				),
				new Link(
					'https://example.com/right-here', // todo: real link here.
					__( 'Right here', 'tribe-common' )
				),
			]
		)
);

$sidebar->add_section(
	( new Settings_Section() )
		->add_elements(
			[
				( new Paragraph() )->add_child(
					new Plain_Text( __( 'Having trouble?', 'tribe-common' ) )
				),

				new Link(
					'https://example.com/help', // todo: real link here.
					__( 'Help', 'tribe-common' )
				),
				$break,
				new Link(
					'https://example.com/troubleshoot', // todo: real link here.
					__( 'Troubleshoot', 'tribe-common' )
				),
			]
		)
);

$sidebar->add_section(
	( new Settings_Section() )
		->add_element(
			( new Paragraph() )->add_child(
				new Plain_Text( __( "If you're enjoying The Events Calendar, give us kudos by including a link in the footer of calendar views. It really helps us a lot.", 'tribe-common' ) )
			)
		)
);

$sidebar->add_section(
	( new Settings_Section() )
		->add_element(
			new Field_Wrapper(
				new Tribe__Field(
					'donate-link',
					[
						'type'            => 'checkbox_bool',
						'label'           => esc_html__( 'Show The Events Calendar link', 'the-event-calendar' ),
						'validation_type' => 'boolean',
					],
					get_option( 'donate-link', false )
				)
			)
		)
);

return $sidebar;
