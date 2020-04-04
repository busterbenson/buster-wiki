+++
# hugo new --kind endarkenment-card content/projects/endarkenment/cards/chaos-monkey/-index.md
# basics
title     		 = "{{ replace .Name "-" " " | title }}"
token					 = '{{ .Name }}'
layout				 = "endarkenment-card"
suppress_topnav = true
author    		 = 'me'
one_liner 		 = ""
featured_image = '/images/endarkenment/{{ .Name }}.png'
keywords			 = []
url						 = 'endarkenment/cards/{{ .Name }}'
aliases				 = []

# correspondences
correspondence_church  = ''
correspondence_gravity = ''
correspondence_rps		 = ''

# referenced in the symbols.toml data file
other_symbols	  = []
+++