<?php return '
					SELECT SQL_CALC_FOUND_ROWS  test_posts.ID
					FROM test_posts  INNER JOIN test_tec_occurrences ON test_posts.ID = test_tec_occurrences.post_id
					WHERE 1=1  AND (((test_posts.post_title LIKE \'{c61a815f0a6a4b017008e8f653e786792bedba0e09e3c052f197ba5182c5b090}test1{c61a815f0a6a4b017008e8f653e786792bedba0e09e3c052f197ba5182c5b090}\') OR (test_posts.post_excerpt LIKE \'{c61a815f0a6a4b017008e8f653e786792bedba0e09e3c052f197ba5182c5b090}test1{c61a815f0a6a4b017008e8f653e786792bedba0e09e3c052f197ba5182c5b090}\') OR (test_posts.post_content LIKE \'{c61a815f0a6a4b017008e8f653e786792bedba0e09e3c052f197ba5182c5b090}test1{c61a815f0a6a4b017008e8f653e786792bedba0e09e3c052f197ba5182c5b090}\')) AND ((test_posts.post_title LIKE \'{c61a815f0a6a4b017008e8f653e786792bedba0e09e3c052f197ba5182c5b090}test2{c61a815f0a6a4b017008e8f653e786792bedba0e09e3c052f197ba5182c5b090}\') OR (test_posts.post_excerpt LIKE \'{c61a815f0a6a4b017008e8f653e786792bedba0e09e3c052f197ba5182c5b090}test2{c61a815f0a6a4b017008e8f653e786792bedba0e09e3c052f197ba5182c5b090}\') OR (test_posts.post_content LIKE \'{c61a815f0a6a4b017008e8f653e786792bedba0e09e3c052f197ba5182c5b090}test2{c61a815f0a6a4b017008e8f653e786792bedba0e09e3c052f197ba5182c5b090}\')))  AND ( 
  test_tec_occurrences.post_id IS NOT NULL 
  AND 
  CAST(test_tec_occurrences.end_date AS DATETIME) >= \'2022-10-01 08:00:00\'
) AND ((test_posts.post_type = \'tribe_events\' AND (test_posts.post_status = \'publish\' OR test_posts.post_status = \'tribe-ea-success\' OR test_posts.post_status = \'tribe-ea-failed\' OR test_posts.post_status = \'tribe-ea-schedule\' OR test_posts.post_status = \'tribe-ea-pending\' OR test_posts.post_status = \'tribe-ea-draft\' 
OR test_posts.post_status = \'private\')))
					GROUP BY test_tec_occurrences.occurrence_id
					ORDER BY ID DESC, test_tec_occurrences.occurrence_id DESC, test_tec_occurrences.start_date ASC, test_posts.post_date ASC
					LIMIT 0, 10
				';
