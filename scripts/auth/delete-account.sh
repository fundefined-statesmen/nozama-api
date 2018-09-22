#!/bin/bash

API="http://localhost:4741"
URL_PATH="/delete-account"

curl "${API}${URL_PATH}/" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"

echo
