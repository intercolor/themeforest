<?php get_header(); ?>
<!--Start Top Section -->

<div class="subsection">
<div class="pagename">
            <h3 class="alignleft">
                <?php wp_title("",true); ?>
            
            <?php
if(get_post_meta($post->ID, "tagline_value", $single = true) != "") :
echo '<span>'.get_post_meta($post->ID, "tagline_value", $single = true).'</span>';
endif;
?>
</h3>
            <div class="clear"></div>
        </div>
    <div class="subheading blog">
        <div class="subcontainer">
            <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
            <div class="blogpost"> <div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <!--Blog Post Entry-->
                          <h2><a href="<?php the_permalink(); ?>" rel="bookmark" title="<?php printf(__('Permanent Link to %s', 'framework'), get_the_title()); ?>">
                    <?php the_title(); ?>
                    </a></h2>     
                <!--Blog Post Title-->
                <div class="featuredimage">
                    <?php /* if the post has a WP 2.9+ Thumbnail */
					if ( (function_exists('has_post_thumbnail')) && (has_post_thumbnail()) ) : ?>
                   <a title="<?php printf(__('Permanent Link to %s', 'framework'), get_the_title()); ?>" href="<?php the_permalink(); ?>" class="flush">
                        <?php the_post_thumbnail('blog'); /* post thumbnail settings configured in functions.php */ ?>
                        </a>  
                    <?php endif; ?>
                </div>

                <!--Blog Excerpt-->
                <?php the_content(__('Read more...', 'framework')); ?>
                <?php edit_post_link( __('Edit Post', 'framework'), '<div class="edit-post"><p>[', ']</p></div>' ); ?>
                <!--Read More Text-->
                <div class="blogfooter">
                    <ul>
                        <li class="postdate">
                            <h5>
                                <?php the_time('Y'); ?>
                                <br />
                                <span>
                                <?php the_time('M j'); ?>
                                </span>
                           </h5>
                        </li>
                        <li class="postinfo">
                            <div class="icons">
                            	<a href="<?php comments_link(); ?>"><img src="<?php echo get_template_directory_uri();?>/images/comment-icon.png" alt="comments" /><span class="tooltip black right"><?php comments_number( __('No Comments', 'framework'), __('One Comment', 'framework'), __('% Comments', 'framework') ); ?></span></a>
            					<a href="#"><img src="<?php echo get_template_directory_uri();?>/images/tag-icon.png" alt="Tags" /><span class="tooltip black right"><?php _e('Posted in', 'framework'); ?><?php foreach((get_the_category()) as $category) { echo ', '. $category->cat_name;}?></span></a>
           						<a href="#"><img src="<?php echo get_template_directory_uri();?>/images/user-icon.png" alt="date"/><span class="tooltip black right"><?php _e('Post by', 'framework'); ?> <?php the_author(); ?></span></a>
            				</div>
                        </li>
                    </ul>
                  <div class="clear"></div>
                </div>
                </div>
            </div>
            <?php endwhile; else :?>
            <!-- Else nothing found -->
            <h2><?php _e('Error 404 - Not found.', 'framework'); ?></h2>
            <p><?php _e("Sorry, but you are looking for something that isn't here.", 'framework'); ?></p>
            <!--BEGIN .navigation .page-navigation -->
            <?php endif; ?>
           
            <div class="clear"></div>
        </div>
        <div class="sidebar">
            <?php	/* Widget Area */	if ( !function_exists( 'dynamic_sidebar' ) || !dynamic_sidebar('Blog Sidebar') ) ?>
            
        </div>
        <div class="clear"></div>
    </div>
     <?php if ( function_exists('pp_has_pagination') ) : ?>
            <?php if (pp_has_pagination()) : ?>
            <ul id="pagination">
                <!-- the previous page -->
                <?php pp_the_pagination(); if (pp_has_previous_page()) : ?>
                <li class="previous"> <a href="<?php pp_the_previous_page_permalink(); ?>" class="prev">&laquo; Previous</a></li>
                <?php else : ?>
                <li class="previous-off">&laquo; Previous</li>
                <?php endif; pp_rewind_pagination(); ?>
                <!-- the page links -->
                <?php while(pp_has_pagination()) : pp_the_pagination(); ?>
                <?php if (pp_is_current_page()) : ?>
                <li class="active">
                    <?php pp_the_page_num(); ?>
                </li>
                <?php else : ?>
                <li><a href="<?php pp_the_page_permalink(); ?>">
                    <?php pp_the_page_num(); ?>
                    </a></li>
                <?php endif; ?>
                <?php endwhile; pp_rewind_pagination(); ?>
                <!-- the next page -->
                <?php pp_the_pagination(); if (pp_has_next_page()) : ?>
                <li class="next"> <a href="<?php pp_the_next_page_permalink(); ?>">Next &raquo;</a></li>
                <?php else : ?>
                <li class="next-off">Next &raquo;</span>
                    <?php endif; pp_rewind_pagination(); ?>
            </ul>
            <?php endif; else: ?>
			<div class="older"><?php next_posts_link(__('&larr; Older', 'framework')) ?></div>
				<div class="newer"><?php previous_posts_link(__('Newer &rarr;', 'framework')) ?></div>
			<?php echo paginate_links(); wp_link_pages('before=<p>&after=</p>&next_or_number=number&pagelink=page %');  endif;?>

</div>
<?php get_footer(); ?>
