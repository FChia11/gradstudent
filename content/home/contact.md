---
# An instance of the Contact widget.
widget: contact

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 80

title: Let's Connect.
subtitle:

content:
  # Automatically link email and phone or display as text?
  autolink: true

  # Email form provider
  form:
    provider: netlify
    formspree:
      id:
    netlify:
      # Enable CAPTCHA challenge to reduce spam?
      captcha: false

  # Contact details (edit or remove options as required)
  email: fc73@st-andrews.ac.uk
  address:
    street: The Old Burgh School, Abbey Walk
    city: St Andrews
    region: Scotland
    postcode: 'KY16 9LB'
    country: United Kingdom
    country_code: UK
  coordinates:
    latitude: '	56.3369881'
    longitude: '-2.7887517'
  contact_links:
    - icon: twitter
      icon_pack: fab
      name: DM Me
      link: 'https://twitter.com/francescachia11'

design:
  columns: '2'
  spacing: {padding: [0, 0, 0, 0]}
---

