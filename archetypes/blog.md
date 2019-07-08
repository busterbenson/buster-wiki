+++
# hugo new content/blog/YYYY/MM-DD-title-goes-here.md
# basis
title     		 	= "{{ slicestr (replace .Name "-" " " | title) 6 }}"
author 		      = "me"
link 				    = ""
one_liner 		 	= ""
featured_image 	= "" 
belief_delta   	= false

# taxonomies
influences		 	= []
piles     		 	= []
projects		 	  = []

# article, reference, thought, book, idea, podcast, blog, tv
# annotated-link, space, case
category  		 	= 'article'
tags			 	    = []

# metadata
layout	    	 	= "piece"
date 				    = {{ .Date }}
+++
