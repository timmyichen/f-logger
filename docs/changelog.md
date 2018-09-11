# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/). This project uses its own versioning system. This document is maintained by Lisa and is intended to be a layman's description of our progress.

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
- git workflow document and directory help document to the docs folder

### Changed
- added files to gitignore

## [0.0.3] - 2018-08-25
### Added
- express-session middleware for Node.js
- cookieParser as a requirement for express-session
- morgan middleware to log HTTP requests and return server response time
- express-router-async to support asynchronous routing
- routing for login, signup, and logout
- index file to consolidate account models
- eslint to catch errors in coding
- support for sessions

### Changed
- configured passport to authenticate users
- all login, signup, and logout functions and routers are now asynchronous
- changed all "teachers" to "users"

## [0.0.2] - 2018-08-24
### Added
- bcrypt to handle password encryption
- a backend route to create a new user (user creation endpoint)
- Mongoose for database validation
- Semantic UI for CSS styling

### Changed
- configured babel to compile JSX code
- standardized API routes (all routes go through /api/ now)

## [0.0.1] - 2018-08-22
### Added
- folder systems for the MongoDB, NodeJS, and React stack
- README with instructions on setting up your workspace for Mac and Linux

