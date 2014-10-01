cryto-cli
=======================

Simple command-line interface for the [crypto module](http://nodejs.org/docs/latest/api/crypto.html) with limited functionality.

# Installation
```
# Get the latest snapshot
git clone https://github.com/jordanpatton/crypto-cli.git crypto-cli
```

# Usage
```
# Open your local copy
cd crypto-cli

# Encrypt some data
MASTER_KEY='password' node encrypt.js 'secret'
# secret 4e587ecc387401db5ab0278226110a11

# Decrypt some data
MASTER_KEY='password' node decrypt.js '4e587ecc387401db5ab0278226110a11'
# 4e587ecc387401db5ab0278226110a11 secret
```
