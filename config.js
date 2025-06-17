const config = {
  "modalQuestions": [
    {
      "id": "favorite_local_events",
      "questionText": "Which type of local events do you enjoy attending most in Toronto?",
      "options": [
        { "value": "major_league_sports", "text": "Major league sports games" },
        { "value": "food_wine_festivals", "text": "Food and wine festivals" },
        { "value": "music_concerts", "text": "Music concerts" },
        { "value": "art_exhibitions", "text": "Art exhibitions" }
      ]
    },
    {
      "id": "lifestyle_preferences",
      "questionText": "On a typical weekend, how do you prefer to spend your time?",
      "options": [
        { "value": "exploring_real_estate", "text": "Exploring new real estate developments or open houses" },
        { "value": "relaxing_home", "text": "Relaxing at home with friends and family" },
        { "value": "outdoor_activities", "text": "Engaging in outdoor activities like hiking or biking" },
        { "value": "trendy_dining", "text": "Dining at trendy restaurants or cafes" }
      ]
    },
    {
      "id": "travel_habits",
      "questionText": "How do you typically spend your vacations?",
      "options": [
        { "value": "international_travel", "text": "Traveling to international destinations" },
        { "value": "local_attractions", "text": "Visiting local attractions around Toronto" },
        { "value": "staycations", "text": "Taking staycations in luxury accommodations" },
        { "value": "road_trips", "text": "Going on road trips to explore new areas" }
      ]
    },
    {
      "id": "community_engagement",
      "questionText": "How involved are you in community activities or neighborhood associations?",
      "options": [
        { "value": "very_involved", "text": "Very involved, I attend meetings and events regularly" },
        { "value": "somewhat_involved", "text": "Somewhat involved, I participate occasionally" },
        { "value": "interested_but_not_very", "text": "Not very involved, but I’m interested in what's happening" },
        { "value": "not_involved", "text": "Not involved at all" }
      ]
    }
  ],
  "giveaway": {
    "name": "Jays Tickets Giveaway",
    "heroHeadline": "Win Big with <span class='highlight'>Jays Tickets!</span>",
    "heroSubheadline": "Celebrate Canada Day in Style! Join us for your chance to win tickets to an amazing Jays game!",
    "promotionDates": "Promotion runs for Canada Day event: July 1 – July 2, 2025.",
    "endDate": "2025-07-02T23:59:59",
    "heroBackgroundImageUrl": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/camrm9njznrme0cqfdpbjc5b2c.jpg",
    "heroCtaText": "Enter Now to Win!",
    "entryFormCtaText": "Count Me In!",
    "successModalHeaderText": "🎉 You're In! 🎉",
    "successModalMainMessage": "Your entry for the <strong>Jays Tickets Giveaway</strong> has been successfully submitted. Best of luck!",
    "successModalEmailPrompt": "We'll announce the winner via email after the draw on July 2, 2025. Keep an eye on your inbox!"
  },
  "prize": {
    "name": "Toronto Blue Jays Tickets",
    "value": "$100 Value",
    "description": "Win $100 worth of tickets for an unforgettable Toronto Blue Jays baseball game experience this Canada Day! Perfect for family fun or a day out with friends at Toronto’s favorite ballpark.",
    "images": [
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/3tb55ty9hsrme0cqfdp9n9tdkg.jpg",
        "alt": "Excited fans at the Jays game"
      },
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/z7qntmz2n1rmc0cqfdp86z9yk4.jpg",
        "alt": "Blue Jays stadium atmosphere"
      },
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/x76gcdzs9hrma0cqfdpafjb32w.jpg",
        "alt": "Baseball game action"
      },
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/yam4ddrh5srmc0cqfdpshpf9v0.jpg",
        "alt": "Celebration at the game"
      }
    ],
    "includedItems": [
      { "icon": "fas fa-ticket-alt", "text": "$100 value in Blue Jays game tickets" },
      { "icon": "fas fa-users", "text": "Great for family, friends, or sports fans" },
      { "icon": "fas fa-map-marker-alt", "text": "Experience the iconic Rogers Centre atmosphere" },
      { "icon": "fas fa-check-circle", "text": "No purchase necessary to enter" },
      { "icon": "fas fa-bolt", "text": "Fast and easy entry online or at our event booth" }
    ],
    "limitedTimeOfferText": "⚾ Limited Time Canada Day Giveaway!",
    "ctaButtonText": "I WANT TO WIN THESE TICKETS!"
  },
  "howToEnter": {
    "steps": [
      {
        "icon": "fas fa-map-marker-alt",
        "title": "Visit Our Booth",
        "description": "Come find us at the Canada Day event on July 1st to enter!"
      },
      {
        "icon": "fas fa-keyboard",
        "title": "Fill The Survey",
        "description": "Complete our quick and fun survey either online or at the event."
      },
      {
        "icon": "fas fa-envelope-open-text",
        "title": "Wait For The Draw",
        "description": "Winner will be announced on July 2nd via email."
      }
    ],
    "highlights": [
      { "icon": "fas fa-baseball-ball", "text": "Experience the thrill of live baseball!" },
      { "icon": "fas fa-gift", "text": "Exciting $100 prize worth of tickets" },
      { "icon": "fas fa-smile", "text": "Free and easy to enter!" }
    ]
  },
  "entryForm": {
    "subtitle": "Join our Canada Day celebration and enter to win Blue Jays tickets!",
    "entryCountText": "Hundreds of baseball fans already entered!",
    "socialSharePrompt": "Share this giveaway with your friends:",
    "sharePlatforms": {
      "facebook": "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href),
      "twitter": "https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href) + "&text=" + encodeURIComponent("Win Blue Jays tickets for Canada Day! Enter now!")
    }
  },
  "rules": {
    "fairSelectionInfo": {
      "title": "Fair & Transparent Draw",
      "text": "Our winner will be selected randomly and fairly to give everyone an equal chance. The draw is conducted with a certified random number generator."
    },
    "importantNotice": {
      "title": "Winner Notification",
      "text": "The winner will be contacted via the email provided at entry. Please watch your inbox and spam folder following the draw on July 2, 2025."
    },
    "faq": [
      {
        "q": "Who is eligible to enter?",
        "a": "Residents 18 years and older located in Toronto and surrounding areas."
      },
      {
        "q": "When is the giveaway period?",
        "a": "Entries open on July 1, 2025, and close on July 2, 2025 at 11:59 PM EST."
      },
      {
        "q": "How will the winner be selected?",
        "a": "One winner will be chosen randomly from all eligible entries received during the promotion period."
      },
      {
        "q": "How will the winner be notified?",
        "a": "The winner will be notified by email shortly after the draw on July 2nd, 2025."
      },
      {
        "q": "Can I enter more than once?",
        "a": "Only one entry per person is allowed to ensure fairness."
      },
      {
        "q": "Is my information safe?",
        "a": "We value your privacy. Your data is securely handled and will not be shared or sold."
      }
    ],
    "tips": [
      "Double-check your email before submitting.",
      "Add shar@theskygroup.ca to your contacts to receive winner notifications.",
      "Stay connected via Sky Group’s social channels for updates."
    ]
  },
  "footerContact": {
    "organizerName": "Sky Group",
    "organizerLogoUrl": "https://prod-files-secure.s3.us-west-2.amazonaws.com/8e0c10a0-da43-409c-b191-91135b7161ff/eed1f4ef-c781-4015-8092-dda5b2f860d9/68278639dbfc24a322fd422d.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX2WJ6J5%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T010631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpVYR27QlzmQZWCxqukomTbwaxTe5xEs6W1xJBCrd2AgIhAJvj1KR8cy%2F7BY0FXuVhvAQoXVriTqHlirUVOUVxijYQKv8DCGkQABoMNjM3NDIzMTgzODA1IgxpN6cuuhK6Eddt7scq3APAPv%2FhQg2zI6ZWQa4PCEJg%2F%2FVMw%2B2FIu7fLlA27T1tCc4%2BxIbc97aqfdPDcgQ3p%2Bxf6%2BP3Ezms4D7DRdLxOfcCtWmhQjp2j%2F9z2YLa4ZseBAgYgkWhWJyFN3wan4JjFYoc6MJYE%2FnI4vr9qaiqA%2BIKsVfbJRFTJkdpCjHZIDClsErfm75rlfSJZrBbLSo0VTgkJkf7Y3cJeJnV%2BKL29Q4SvM0gTd7pR%2Bl%2F4SyqK6WJW8a9DOyIwzJF0mPzl6yAG004iZjoOUjenNVWGaLpDhWPZHa0MIgxuuE%2FTMjyEkbWo51Dx8R9RfobUBgtBgMYrFKgWfJhsXad9MLX6j2fIeeDTaDwiWMT4THooNrvtcEYg03TJg2pU%2FJ82LPhEfKP%2FfVCjXm8nGgP72DyHPgYD%2B%2BXCagdCMcWEY5OPbgv8Nm7bK05I3PbZ65oica0XWotccsFaf%2Fr7Ol4POzAv%2FCoEQloKutrBdoW5TyklSKGV048Hfeza0%2FiPcvExKGil2pYOQl%2FzvvAyFtx1ybtVSd35eBoGVriX48Ztp7aBn1SdQWs%2Blb%2BJIujhhGLxHqi3k9U%2Ff4JjFjzoZC1g9c6NJbDjmvYOHzxbuTKKeMp1HKJd7ovXrdUKZmsW13WGbwJxDCD38LCBjqkAUx8YVo6e3NP86rqnzw71ASKTDZxB9GnRaBU1RxjK1X0txYjgK2KgltF7LWjH6XZ4UVQw3HisXYPLobyS%2FxpfKxOeX9HJQzuvGZdFHSO25LM5gZPcEW81brYzHTb4Ke8dxZvonXsRPCHViC%2Bh%2F9nJ63VO0uZDkhIhEQCcLFG65WriwlwYq98KwkmfDd6qbS4oAMUC5wmuBUC%2BrNUMXwxLfupTZkU&X-Amz-Signature=2d67438f24445fc7fd616afbf68dcc091c75cb8f521f01cde8a3c0913c926c3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
    "email": "shar@theskygroup.ca",
    "phone": "1 647 887 4996",
    "address": "36 Distillery Lane Unit 500 Toronto M5A3C4",
    "social": {
      "facebook": "https://www.facebook.com/theskygroupre",
      "instagram": "https://www.instagram.com/theskygroup_re"
    },
    "copyrightOwner": "Sky Group"
  },
  "meta": {
    "pageTitle": "Win Blue Jays Tickets - Canada Day Giveaway!",
    "navBrandLogoText": "Sky Group",
    "privacyPolicyLink": "https://www.mls.theskygroup.ca/privacy-policy"
  },
  "settings": {
    "ghlWebhookUrl": "",
    "theme": "dark",
    "confettiColors": ["#004C97", "#D31F26", "#AECBFA", "#FFFFFF"],
    "showCountdownInHero": true
  },
  "deploymentInfo": {
    "repoName": "Giveaway-494",
    "repoUrl": "https://github.com/arslvn93/Giveaway-494",
    "netlifyUrl": "http://Giveaway-494.netlify.app"
  }
};