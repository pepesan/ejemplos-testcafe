Feature: Searching for Docker on CursosDeDesarrollo

  I want to find Docker posts on CursosDeDesarrollo

  Scenario: Searching for Docker on CursosDeDesarrollo
    Given I am open CursosDeDesarrollo page
    When I am typing my search request "docker" on CursosDeDesarrollo
    When I am clicking the search button
    Then I should see that the string "docker"
