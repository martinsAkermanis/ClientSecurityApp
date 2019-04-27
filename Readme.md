

Cross platform mobile app with following functionalities:

1) Client registration and Login validation
2) Welcome screen
3) Main screen with such fields:
  * Current GPS location
  * Current Address converted from GPS coordinates (from external API service)
  * Report incident button 
    - sends an incident request to the backend (Java Spring Boot) 
    - connects to the DB, retrieves available security Units in area
    - calculates nearest Unit travel distance (Using Google Maps API)
    - adds new Incident to the DB (id, client id, unit id, timestamp, incident coordinates)
  * Call 112 button for calling emergency services directly
