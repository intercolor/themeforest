// Interactive change skin custom styles
function ancora_skin_customizer(option, val) {
	var custom_style = '';
	if (option == 'bg_color') {

		jQuery("#custom_options .co_switch_box a[data-value='boxed']").trigger('click');
		jQuery('#custom_options #co_bg_pattern_list .co_pattern_wrapper, #custom_options #co_bg_images_list .co_image_wrapper').removeClass('active');
		jQuery('body').removeClass('bg_pattern_1 bg_pattern_2 bg_pattern_3 bg_pattern_4 bg_pattern_5 bg_image_1 bg_image_2 bg_image_3').css('backgroundColor', clr);

	} else if (option == 'bg_pattern') {

		jQuery('body')
			.removeClass('bg_pattern_1 bg_pattern_2 bg_pattern_3 bg_pattern_4 bg_pattern_5 bg_image_1 bg_image_2 bg_image_3')
			.css('backgroundColor', 'transparent')
			.addClass('bg_pattern_' + val);

	} else if (option == 'bg_image') {

		jQuery('body')
			.removeClass('bg_pattern_1 bg_pattern_2 bg_pattern_3 bg_pattern_4 bg_pattern_5 bg_image_1 bg_image_2 bg_image_3')
			.css('backgroundColor', 'transparent')
			.addClass('bg_image_' + val);

	} else if (option == 'link_color') {

		var clr = val;
		var rgb = ancora_hex2rgb(clr);
		// Link color styles
		custom_style += '\
			a,\
			.bg_tint_light a,\
			.bg_tint_light h1,\
			.bg_tint_light h2,\
			.bg_tint_light h3,\
			.bg_tint_light h4,\
			.bg_tint_light h5,\
			.bg_tint_light h6,\
            .bg_tint_light h1 a,\
            .bg_tint_light h2 a,\
            .bg_tint_light h3 a,\
            .bg_tint_light h4 a,\
            .bg_tint_light h5 a,\
            .bg_tint_light h6 a,\
            table tr:first-child,\
            .widget_area a,\
            .widget_area ul li:before,\
            .widget_area ul li a:hover,\
            .woocommerce ul.products li.product h3 a,\
            .woocommerce-page ul.products li.product h3 a\
            {\
				color:'+clr+';\
			}\
		';
		// Link dark color
		hsb = ancora_hex2hsb(clr);
		hsb.s = Math.min(100, hsb.s + 15);
		hsb.b = Math.max(0, hsb.b - 20);
		clr = ancora_hsb2hex(hsb);
		custom_style += '\
			a:hover,\
			.bg_tint_light a:hover,\
            .bg_tint_light h1 a:hover,\
            .bg_tint_light h2 a:hover,\
            .bg_tint_light h3 a:hover,\
            .bg_tint_light h4 a:hover,\
            .bg_tint_light h5 a:hover,\
            .bg_tint_light h6 a:hover,\
            .widget_area a:hover,\
            .widget_area ul li:before,\
            .widget_area ul li a:hover,\
            .woocommerce ul.products li.product h3 a:hover,\
            .woocommerce-page ul.products li.product h3 a:hover,\
            .sc_team_item .sc_team_item_info .sc_team_item_title a:hover,\
            a.rsswidget:hover,\
            .widget_area ul li.recentcomments a:hover\
			{\
				color: '+clr+';\
			}\
		';

	} else if (option == 'menu_color') {

		var clr = val;
		var rgb = ancora_hex2rgb(clr);
		// Menu color styles
		custom_style += '\
			.bg_tint_dark,\
            .bg_tint_dark h1,\
            .bg_tint_dark h2,\
            .bg_tint_dark h3,\
            .bg_tint_dark h4,\
            .bg_tint_dark h5,\
            .bg_tint_dark h6,\
            a.link_color:hover,\
            .link_dark,\
            .menu_color,\
			a.menu_color:hover,\
			.menu_dark,\
			.bg_tint_light .menu_main_responsive_button,\
			.search_results .post_more,\
            .search_results .search_results_close,\
			.post_title .post_icon,\
			.post_item_related .post_title a,\
            .pagination_wrap .pager_next,\
            .pagination_wrap .pager_prev,\
            .pagination_wrap .pager_last,\
            .pagination_wrap .pager_first,\
            .comments_list_wrap .comment_info > span.comment_author,\
            .comments_list_wrap .comment_info > .comment_date > .comment_date_value,\
            .post_item_404 .page_subtitle,\
            .post_item_404 .page_description a,\
            .layout_single-courses .post_info .post_info_date,\
            .layout_single-courses .post_info .post_info_posted:before,\
			.sidebar.widget_area a:hover,\
            .sidebar.widget_area ul li a,\
            .sidebar.widget_area ul li a:hover,\
            .widget_area ul li a.username,\
            .widget_area ul li a.username:hover,\
            .widget_area .widget_text a,\
            .widget_area .post_info a,\
            .widget_area .widget_socials .logo .logo_text,\
			.widget_area .widget_product_tag_cloud a:hover,\
            .widget_area .widget_tag_cloud a:hover,\
            .woocommerce .woocommerce-message:before,\
            .woocommerce-page .woocommerce-message:before,\
            .woocommerce div.product span.price,\
            .woocommerce div.product p.price,\
            .woocommerce #content div.product span.price,\
            .woocommerce #content div.product p.price,\
            .woocommerce-page div.product span.price,\
            .woocommerce-page div.product p.price,\
            .woocommerce-page #content div.product span.price,\
            .woocommerce-page #content div.product p.price,\
            .woocommerce ul.products li.product .price,\
            .woocommerce-page ul.products li.product .price,\
            .woocommerce a.button.alt:hover,\
            .woocommerce button.button.alt:hover,\
            .woocommerce input.button.alt:hover,\
            .woocommerce #respond input#submit.alt:hover,\
            .woocommerce #content input.button.alt:hover,\
            .woocommerce-page a.button.alt:hover,\
            .woocommerce-page button.button.alt:hover,\
            .woocommerce-page input.button.alt:hover,\
            .woocommerce-page #respond input#submit.alt:hover,\
            .woocommerce-page #content input.button.alt:hover,\
            .woocommerce a.button:hover,\
            .woocommerce button.button:hover,\
            .woocommerce input.button:hover,\
            .woocommerce #respond input#submit:hover,\
            .woocommerce #content input.button:hover,\
            .woocommerce-page a.button:hover,\
            .woocommerce-page button.button:hover,\
            .woocommerce-page input.button:hover,\
            .woocommerce-page #respond input#submit:hover,\
            .woocommerce-page #content input.button:hover,\
            .woocommerce .quantity input[type="button"]:hover,\
            .woocommerce #content input[type="button"]:hover,\
            .woocommerce-page .quantity input[type="button"]:hover,\
            .woocommerce-page #content .quantity input[type="button"]:hover,\
            .woocommerce ul.cart_list li > .amount,\
            .woocommerce ul.product_list_widget li > .amount,\
            .woocommerce-page ul.cart_list li > .amount,\
            .woocommerce-page ul.product_list_widget li > .amount,\
            .woocommerce ul.cart_list li span .amount,\
            .woocommerce ul.product_list_widget li span .amount,\
            .woocommerce-page ul.cart_list li span .amount,\
            .woocommerce-page ul.product_list_widget li span .amount,\
            .woocommerce ul.cart_list li ins .amount,\
            .woocommerce ul.product_list_widget li ins .amount,\
            .woocommerce-page ul.cart_list li ins .amount,\
            .woocommerce-page ul.product_list_widget li ins .amount,\
            .woocommerce.widget_shopping_cart .total .amount,\
            .woocommerce .widget_shopping_cart .total .amount,\
            .woocommerce-page.widget_shopping_cart .total .amount,\
            .woocommerce-page .widget_shopping_cart .total .amount,\
            .woocommerce a:hover h3,\
            .woocommerce-page a:hover h3,\
            .woocommerce .cart-collaterals .order-total strong,\
            .woocommerce-page .cart-collaterals .order-total strong,\
            .woocommerce .checkout #order_review .order-total .amount,\
            .woocommerce-page .checkout #order_review .order-total .amount,\
            .woocommerce .star-rating,\
            .woocommerce-page .star-rating,\
            .woocommerce .star-rating:before,\
            .woocommerce-page .star-rating:before,\
            .widget_area .widgetWrap ul > li .star-rating span,\
            .woocommerce #review_form #respond .stars a,\
            .woocommerce-page #review_form #respond .stars a,\
            .woocommerce ul.products li.product h3 a,\
            .woocommerce-page ul.products li.product h3 a,\
            .woocommerce ul.products li.product .star-rating:before,\
            .woocommerce ul.products li.product .star-rating span,\
            .woocommerce nav.woocommerce-pagination ul li a:focus,\
            .woocommerce nav.woocommerce-pagination ul li a:hover,\
            .woocommerce nav.woocommerce-pagination ul li span.current,\
            .sc_accordion.sc_accordion_style_1 .sc_accordion_item .sc_accordion_title:hover,\
            .sc_countdown.sc_countdown_style_1 .sc_countdown_digits,\
            .sc_countdown.sc_countdown_style_1 .sc_countdown_separator,\
            .sc_countdown.sc_countdown_style_1 .sc_countdown_label,\
            .sc_icon_bg_link,\
            .sc_icon_bg_menu,\
            .sc_icon_shape_round.sc_icon_bg_link:hover,\
            .sc_icon_shape_square.sc_icon_bg_link:hover,\
            a:hover .sc_icon_shape_round.sc_icon_bg_link,\
            a:hover .sc_icon_shape_square.sc_icon_bg_link,\
           .sc_icon_shape_round.sc_icon_bg_menu:hover,\
            .sc_icon_shape_square.sc_icon_bg_menu:hover,\
            a:hover .sc_icon_shape_round.sc_icon_bg_menu,\
            a:hover .sc_icon_shape_square.sc_icon_bg_menu,\
            .sc_slider_controls_wrap a:hover,\
            .sc_tabs.sc_tabs_style_1 .sc_tabs_titles li a,\
            .sc_title_icon,\
            .sc_toggles.sc_toggles_style_1 .sc_toggles_item .sc_toggles_title.ui-state-active,\
            .widget_area .widget_calendar a.month_prev:before,\
            .widget_area .widget_calendar .month_prev a:before,\
            .boxed_icon a,\
            .post_content h4,\
            .post_info .post_info_counters .post_counters_likes.disabled,\
            .history_service .wpb_wrapper p,\
            .post_item_obituaries .post_title a,\
            .post_item_obituaries .post_descr a,\
            .ih-item.square .info .post_title,\
            .ih-item.square .info .post_title a,\
            .post_item_single > .post_title,\
            .related_wrap .section_title,\
            .comments_form_wrap .comments_form_title,\
            .comments_list_wrap .comments_list_title,\
            .comments_list_wrap .comment_reply a,\
            #fbuilder .fields h5,\
            #fbuilder .fields.testik .fields,\
            .logo .logo_text,\
            .post_item_obituaries .post_descr a\
			{\
				color: '+clr+';\
			}\
			.menu_dark_bg,\
			.menu_dark_bgc,\
			.link_dark_bgc,\
			.link_dark_bg,\
			.menu_color_bgc,\
			.menu_color_bg,\
             menu_left .menu_main_wrap .menu_main_nav_area,\
            .menu_center .menu_main_wrap .menu_main_nav_area,\
            .menu_main_wrap .menu_main_nav > li:hover,\
            .menu_main_wrap .menu_main_nav > li.sfHover,\
            .menu_main_wrap .menu_main_nav > li#blob,\
            .menu_main_wrap .menu_main_nav > li.current-menu-item,\
            .menu_main_wrap .menu_main_nav > li.current-menu-parent,\
            .menu_main_wrap .menu_main_nav > li.current-menu-ancestor,\
            .menu_main_wrap .menu_main_nav > li ul li,\
			.top_panel_style_light .page_top_wrap,\
			.top_panel_style_dark.article_style_boxed .page_top_wrap .breadcrumbs a.breadcrumbs_item:hover,\
            .page_top_wrap .breadcrumbs a.breadcrumbs_item:hover,\
            .pagination_viewmore > a,\
            .viewmore_loader,\
            .mfp-preloader span,\
            .sc_video_frame.sc_video_active:before,\
            .content .post_item_404 .page_search .search_wrap .search_form_wrap .search_submit,\
            .widget_area .widget_calendar .today .day_wrap,\
            .scroll_to_top,\
            .woocommerce span.new, .woocommerce-page span.new,\
            .woocommerce span.onsale, .woocommerce-page span.onsale,\
            .woocommerce nav.woocommerce-pagination ul li a,\
            .woocommerce nav.woocommerce-pagination ul li span.current,\
            .woocommerce table.cart thead th,\
            .woocommerce #content table.cart thead th,\
            .woocommerce-page table.cart thead th,\
            .woocommerce-page #content table.cart thead th,\
            .tribe-events-calendar thead th,\
            a.tribe-events-read-more,\
            .tribe-events-button,\
            .tribe-events-nav-previous a,\
            .tribe-events-nav-next a,\
            .tribe-events-widget-link a,\
            .tribe-events-viewmore a,\
            #bbpress-forums div.bbp-topic-content a,\
            #buddypress button,\
            #buddypress a.button,\
            #buddypress input[type="submit"],\
            #buddypress input[type="button"],\
            #buddypress input[type="reset"],\
            #buddypress ul.button-nav li a,\
            #buddypress div.generic-button a,\
            #buddypress .comment-reply-link,\
            a.bp-title-button,\
            #buddypress div.item-list-tabs ul li.selected a,\
            .sc_accordion .sc_accordion_item .sc_accordion_title .sc_accordion_icon:before,\
            .sc_accordion .sc_accordion_item .sc_accordion_title .sc_accordion_icon_opened:before,\
            .sc_audio.sc_audio_info,\
            .sc_button.sc_button_style_dark,\
            .sc_button.sc_button_style_filled,\
            .sc_button.sc_button_style_dark.sc_button_bg_menu,\
            .sc_button.sc_button_style_filled.sc_button_bg_menu,\
            .sc_button.sc_button_style_dark.sc_button_bg_user,\
            .sc_button.sc_button_style_filled.sc_button_bg_user,\
            .sc_blogger.layout_date .sc_blogger_item .sc_blogger_date,\
            .sc_dropcaps.sc_dropcaps_style_1 .sc_dropcaps_item,\
            .sc_highlight_style_1,\
            .sc_highlight_style_2,\
            .sc_icon_shape_round.sc_icon_bg_link,\
            .sc_icon_shape_square.sc_icon_bg_link,\
            .sc_icon_shape_round.sc_icon_bg_menu,\
            .sc_icon_shape_square.sc_icon_bg_menu,\
            .sc_popup:before,\
            .sc_scroll_controls_wrap a,\
            .sc_team_style_1 .sc_team_item_info,\
            blockquote,\
            .sc_quote_style_1,\
            .sc_toggles.sc_toggles_style_1 .sc_toggles_item .sc_toggles_title.ui-state-active .sc_toggles_icon_opened,\
            .bottom_cont,\
            .big_banner .sc_contact_form .sc_contact_form_item.label_left button,\
            .obituaries .search_wrap.search_style_regular .search_form_wrap .search_submit,\
            form.comment-form .submit\
            {\
				background-color: '+clr+';\
			}\
			.menu_dark_border,\
			.menu_color_border,\
			.link_dark_border,\
			.pagination > a,\
			.widget_area .widget_calendar .today .day_wrap,\
			.sc_blogger.layout_date .sc_blogger_item .sc_blogger_date,\
			.sc_icon_shape_round.sc_icon_bg_link,\
            .sc_icon_shape_square.sc_icon_bg_link,\
            .sc_icon_shape_round.sc_icon_bg_menu,\
            .sc_icon_shape_square.sc_icon_bg_menu,\
            .sc_toggles.sc_toggles_style_1 .sc_toggles_item .sc_toggles_title.ui-state-active\
			 {\
			 	border-color: '+clr+';\
			}\
		';
		// Menu dark color
		hsb = ancora_hex2hsb(clr);
		hsb.s = Math.min(100, hsb.s + 15);
		hsb.b = Math.max(0, hsb.b - 20);
		clr = ancora_hsb2hex(hsb);
		custom_style += '\
		';

	}
    else if (option == 'user_color') {

		var clr = val;
		var rgb = ancora_hex2rgb(clr);
		// User menu color styles
		custom_style += '\
		    .user_color,\
		    .sc_icon_bg_user,\
		    a:hover .sc_icon_shape_round.sc_icon_bg_user,\
            a:hover .sc_icon_shape_square.sc_icon_bg_user,\
            .menu_main_wrap .menu_main_nav > li ul li a:hover,\
            .bg_tint_light .menu_main_responsive_button:hover,\
            .widget_area ul li a.username:hover,\
            .woocommerce ul.products li.product h3 a:hover,\
            .woocommerce-page ul.products li.product h3 a:hover,\
            .sc_icon.sc_icon_bg_link:hover,\
            a:hover .sc_icon.sc_icon_bg_link,\
            .sc_toggles.sc_toggles_style_1 .sc_toggles_item .sc_toggles_title:hover,\
            .widget_area .widget_twitter ul li:before,\
            .post_info .post_info_counters .post_counters_item:before,\
            .small_banner .small_banner_title a:hover\
		        {\
				    color: '+clr+';\
				}\
		    .user_color_bgc,\
		    .user_color_bg,\
		    .custom_options #co_toggle,\
		    .pagination_viewmore > a:hover,\
		    .woocommerce a.button:hover,\
		    .woocommerce button.button:hover,\
		    .woocommerce input.button:hover,\
		    .woocommerce #respond input#submit:hover,\
		    .woocommerce #content input.button:hover,\
		    .woocommerce-page a.button:hover,\
		    .woocommerce-page button.button:hover,\
		    .woocommerce-page input.button:hover,\
		    .woocommerce-page #respond input#submit:hover,\
		     woocommerce-page #content input.button:hover,\
		     woocommerce a.button.alt:hover,\
		    .woocommerce button.button.alt:hover,\
		    .woocommerce input.button.alt:hover,\
		    .woocommerce #respond input#submit.alt:hover,\
		    .woocommerce #content input.button.alt:hover,\
		    .woocommerce-page a.button.alt:hover,\
		    .woocommerce-page button.button.alt:hover,\
		    .woocommerce-page input.button.alt:hover,\
		    .woocommerce-page #respond input#submit.alt:hover,\
		    .woocommerce-page #content input.button.alt:hover,\
		    a.tribe-events-read-more:hover,\
            .tribe-events-button:hover,\
            .tribe-events-nav-previous a:hover,\
            .tribe-events-nav-next a:hover,\
            .tribe-events-widget-link a:hover,\
            .tribe-events-viewmore a:hover,\
            #bbpress-forums div.bbp-topic-content a:hover,\
            #buddypress button:hover,\
            #buddypress a.button:hover,\
            #buddypress input[type="submit"]:hover,\
            #buddypress input[type="button"]:hover,\
            #buddypress input[type="reset"]:hover,\
            #buddypress ul.button-nav li a:hover,\
            #buddypress div.generic-button a:hover,\
            #buddypress .comment-reply-link:hover,\
            a.bp-title-button:hover,\
            #buddypress div.item-list-tabs ul li.selected a:hover,\
            .sc_icon_shape_round.sc_icon_bg_user,\
            .sc_icon_shape_square.sc_icon_bg_user,\
            .menu_main_wrap .menu_main_nav > li.current-menu-parent,\
            .menu_main_wrap .menu_main_nav > li.current-menu-item,\
            .menu_main_wrap .menu_main_nav > li.blob_over:hover,\
            .menu_main_wrap .menu_main_nav > li.blob_over.sfHover,\
            .content .post_item_404 .page_search .search_wrap .search_form_wrap .search_submit:hover,\
            .scroll_to_top:hover,\
            .woocommerce ul.products li.product .add_to_cart_button:hover,\
            .woocommerce-page ul.products li.product .add_to_cart_button:hover,\
            .sc_button.sc_button_style_global,\
            .sc_button.sc_button_style_global.sc_button_bg_menu,\
            .sc_button.sc_button_style_global.sc_button_bg_user,\
            .sc_button.sc_button_style_dark:hover,\
            .sc_button.sc_button_style_filled:hover,\
            .sc_button.sc_button_style_light:hover,\
            .sc_dropcaps.sc_dropcaps_style_2 .sc_dropcaps_item,\
            .sc_toggles.sc_toggles_style_1 .sc_toggles_item .sc_toggles_title:hover .sc_toggles_icon_opened,\
            .sc_highlight_style_3,\
            .obituaries .search_wrap.search_style_regular .search_form_wrap button.search_submit:hover,\
            .big_banner .sc_contact_form .sc_contact_form_item.label_left button:hover,\
            form.comment-form .submit:hover\
    			{\
    				background-color: '+clr+';\
    			}\
    		.user_color_border,\
    		.sc_icon_shape_round.sc_icon_bg_user,\
            .sc_icon_shape_square.sc_icon_bg_user,\
            .sc_toggles.sc_toggles_style_1 .sc_toggles_item .sc_toggles_title:hover\
    		    {\
    		        border-color:  '+clr+';\
    		    }\
		';
		// User menu dark color
		hsb = ancora_hex2hsb(clr);
		hsb.s = Math.min(100, hsb.s + 15);
		hsb.b = Math.max(0, hsb.b - 20);
		clr = ancora_hsb2hex(hsb);
		custom_style += '\
		';

	//} else if (option == 'body_style') {

		//Uncomment next row to apply changes without reloading page
		//jQuery('body').removeClass('body_style_boxed body_style_wide body_style_fullwide body_style_fullscreen').addClass('body_style_'+val);
	}
	    else {
		ancora_custom_options_show_loader();
		//location.reload();
		var loc = jQuery('#co_site_url').val();
		var params = ANCORA_GLOBALS['co_add_params']!=undefined ? ANCORA_GLOBALS['co_add_params'] : {};
		params[option] = val;
		var pos = -1, pos2 = -1, pos3 = -1;
		for (var option in params) {
			val = params[option];
			pos = pos2 = pos3 = -1;
			if ((pos = loc.indexOf('?')) > 0) {
				if ((pos2 = loc.indexOf(option, pos)) > 0) {
					if ((pos3 = loc.indexOf('&', pos2)) > 0)
						loc = loc.substr(0, pos2) + option+'='+val + loc.substr(pos3);
					else
						loc = loc.substr(0, pos2) + option+'='+val;
				} else
					loc += '&'+option+'='+val;
			} else
				loc += '?'+option+'='+val;
		}
		window.location.href = loc;
		return;

	}

	if (custom_style != '') {
		var styles = jQuery('#ancora-customizer-styles-'+option).length > 0 ? jQuery('#ancora-customizer-styles-'+option) : '';
		if (styles.length == 0)
			jQuery('head').append('<style id="ancora-customizer-styles-'+option+'" type="text/css">'+custom_style+'</style>');
		else
			styles.html(custom_style);
	}
}
