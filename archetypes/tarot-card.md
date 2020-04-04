+++
# hugo new --kind tarot-card content/projects/tarot/cards/suit-number/-index.md
# basics
title     		 = "{{ replace .Name "-" " " | title }}"
token					 = '{{ .Name }}'
card_type			 = '' # major, minor, court
layout				 = "tarot-card"
author    		 = 'me'
one_liner 		 = ""
images				 = ['/images/tarot/rws/rw-{{ .Name }}.jpg']
keywords			 = []
meaning_light  = ''
meaning_shadow = ''
url						 = 'tarot/cards/{{ .Name }}'
aliases				 = []

# more detail
correspondence_suit 				= ''
correspondence_number 			= ''
correspondence_archetype 		= ''
correspondence_hebrew 			= ''
correspondence_element 			= ''
correspondence_planet 			= ''
correspondence_astrological = ''
correspondence_mystical 		= ''
correspondence_story 				= ''

advice_relationships 	 = ''
advice_work 					 = ''
advice_spirituality 	 = ''
advice_personal_growth = ''
advice_fortune_telling = ''

questions	= []

# referenced in the symbols.toml data file
symbols	  = []

# metadata
+++