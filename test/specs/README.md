# PERCY - Webdriverio

## Introduction

This is a percy sample project to perform visual testing using [Percy](https://percy.io) between two URLs. 

Prod - https://www.browserstack.com 

Dev -  https://k8s.bsstag.com

## Setup
 - Node 12+ with npm
 - git
 - Vscode (optional)

## Setup

### Step 1: Clone or Download Project and install dependencies

You can use the **Git Clone** command or **Download Zip** option to download this project to your hard drive.

```bash
git clone https://github.com/smangarole/percy-assignment.git
cd percy-assignment
npm install
```

### Step 2: Create a Percy Project  

Sign in to Percy and create a new project. After you've created the project, you'll be shown a token environment variable. Add PERCY_TOKEN to the environment variable:

#### Windows
```bash
$ set PERCY_TOKEN=<your token here>
```

#### Mac OSx / Unix
```bash
$ export PERCY_TOKEN=<your token here>
```

### Step 3:  Run Project

```bash
$ npm install
$ npm run prod
```
This will create the base build

### Step 4: Change the TEST_URL to stageSite 

Update percyTest.js: TEST_URL from http://browserstack.com  to https://k8s.bsstag.com


### Step 5: Run the tests with snapshots again

```bash
$ npm run dev
```

This will generate snapshots for the dev browserstack site. The new snapshots will be uploaded to Percy and compared with the previous snapshots, showing any visual diffs.