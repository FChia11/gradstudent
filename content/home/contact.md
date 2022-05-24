---
# An instance of the Contact widget.
widget: contact

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 130

title: Contact
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
    street: Castlecliff, The Scores
    city: St Andrews
    region: Scotland
    postcode: 'KY16 9AZ'
    country: United Kingdom
    country_code: UK
  coordinates:
    latitude: '47.61'
    longitude: '-119.43'
  contact_links:
    - icon: twitter
      icon_pack: fab
      name: DM Me
      link: 'https://twitter.com/francescachia11'

design:
  columns: '2'
---

