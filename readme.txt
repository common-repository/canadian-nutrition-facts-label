=== Canadian Nutrition Facts Label ===
Contributors: emaude, dandelionweb
Donate link: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=JEMTB4U8SYFL6
Tags: food, nutrition, nutrition facts, nutrition label, nutrition labelling, Canadian, bilingual, nutrition facts table
Requires at least: 3.0
Tested up to: 5.5.3
Stable tag: trunk
Version: 3.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Use this free WordPress plugin to insert a Canadian Bilingual Nutrition Facts Label to pages or posts with a shortcode.

== Description ==

This plugin creates a 'Label' custom post type which can be assigned to any page or post. 

* Includes Potassium Calcium and Iron
* “Not a Significant source of _____” line will be generated for blank fields
* Add user generated additional vitamins
* Use the shortcode [nutrition-label id=XXX] to display a nutrition label.
* When creating the label you can also specify the page/post and use shortcode [nutrition-label] to display the nutrition label that has been attached to the page/post.
* Developers can add do_shortcode('[nutrition-label]') to their templates.

= Donations: =
I appreciate all donations, no matter the size. Further development of this plugin is not contingent on donations, but they are a nice incentive. To donate click on the "donate to this plugin" link in the sidebar below Author.

== Installation ==

1. Install via the WordPress.org plugin directory or by uploading the canadian-nutrition-facts-label folder to the /wp-content/plugins directory

2. Activate the plugin through the Plugins menu in WordPress

3. Create a label in the new 'Labels' custom post type section of the admin. See units instructions in FAQs for assistance.

4. Include the shortcode [nutrition-label id=XXX] where you want a specific label to be displayed. Change id=XXX to the specific id number for your label. 

5. Developers: When creating the label you can also specify the Page or Post you want the label to appear and include echo do_shortcode("[nutrition-label]"); in the template where you want the label.

== Frequently Asked Questions ==

= What's the shortcode for this plugin? =

[nutrition-label] or [nutrition-label id=XXX]  Change id=XXX to the specific id number for your label. 

= What units does the label use? =

* Grams (g): totalfat, satfat, transfat, carbohydrates, fiber, sugars, protein
* Milligrams (mg): cholesterol and sodium Potassium Calcium and Iron

= How do I add additional vitamins? =
See screenshot #7 - you click Add New Vitamin then edit the field label to give the vitamin a name

= How do I get the line "Not a significant source of ____" to work? =
Leave a vitamin blank and it will be added to the line.  If you put a 0 in the field, it will not be added. You can also add new vitamins, label them in the order you want them to appear, and leave the field blank. Such as "Not a significant source of vitamin C, or thiamine."

== Screenshots ==

1. Install and activate the plugin.  Then navigate to the new "Labels" custom post type in the admin. 

2. Add/Edit Label Form - select a page/post to attach the label.  Then simply fill in all the fields

3. Include 'do_shortcode' in your template.  It will search for the first label attached to that page.

4. Add a label with the shortcode and label id [nutrition-label id=XXX].

5. Example generated label

6. Generated label with Vit C left blank showing as "Not a significant source of vitamin C" and with Thiamine added

7. Example how to add additional vitamins 


== Upgrade Notice ==

= 3 =
* This update makes changes to the database format, Backup your database before updating
* This update will likely mess up formatting on custom vitamins, current % will become mg
* Formatting updated to new standard
* Removed percentage from carbohydrates
* Added percentage to sugars
* added % daily value footnote
* changed vitamins to new standard
* changed custom vitamins to grams and percentage

= 2 =
* Add ability for user generated additional vitamins
* If a field is left blank add it to text summary line "Not a significant source of"
* Separated CSS from the main plugin file. Also directories are added for css, js and images.

= 1.0.3 =
* change label background colour from transparent to white 
* update to readme.txt
= 1.0.2 =
* Create a second field for French version of Serving Size
* wider field widths in admin
= 1.0.1 =
* set the daily values - Canada Iron DV is 14mg/US is 18mg and Canada Calcium DV is 1100mg/US is 1000mg 
= 1 =
* Initial Release, forked and updated from easy-nutrition-facts-label plugin


== Changelog ==
= 3 =
* This update makes changes to the database format, Backup your database before updating
* Formatting updated to new standard
* Removed percentage from carbohydrates
* Added percentage to sugars
* added % daily value footnote
* changed vitamins to new standard
* changed custom vitamins to grams and percentage

= 2 =
* Add ability for user generated additional vitamins
* If a field is left blank add it to text summary line "Not a significant source of"
* Separated CSS from the main plugin file. Also directories are added for css, js and images.

= 1.0.3 =
* change label background colour from transparent to white 
* update to readme.txt
= 1.0.2 =
* Create a second field for French version of Serving Size
* wider field widths in admin
= 1.0.1 =
* set the daily values - Canada Iron DV is 14mg/US is 18mg and Canada Calcium DV is 1100mg/US is 1000mg 
= 1 =
* Initial release
