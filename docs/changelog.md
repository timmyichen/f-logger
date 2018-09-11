# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/). This project uses its own versioning system. Yes, I understand that a changelog makes no sense for an app that hasn’t yet been released.

## [Unreleased]
### Added
- functionality to Trash and Edit icons
- master database

## [0.0.5] - 2018-09-09
### Added
- simple homepage
- default header with login and sign up buttons
- functionality to login and signup components
- a student management dashboard where teachers can add students to the roster by first name, last name, and ID
- Semantic UI icons for deleting and editing students

## Changed
- pulled out onChangeField function in login and signup pages

## [0.0.4] - 2018-08-27
### Added
- git workflow document
- directory help document

### Changed
- added files to gitignore

## [0.0.3] - 2018-08-25
### Added
- express-session middleware for Node.js
- cookieParser as a requirement for express-session
- morgan middleware to log HTTP requests and return server response time
- express-router-async to support asynchronous routing
- routing for login, signup, and logout
- index file for account models
- eslint to catch errors in coding
- sessions

### Changed
- configured passport to authenticate users
- all login, signup, and logout functions and routers are now asynchronous
- converted all teachers to users

## [0.0.2] - 2018-08-24
### Added
- bcrypt to handle password encryption
- backend route to create a new user (user creation endpoint)
- Mongoose for database validation
- Semantic UI for CSS styling

### Changed
- configured babel for JSX
- standardized API routes

## [0.0.1] - 2018-08-22
### Added
- folder system for MongoDB, NodeJS, and React stack
- README with instructions on setting up your workspace for Mac and Linux

