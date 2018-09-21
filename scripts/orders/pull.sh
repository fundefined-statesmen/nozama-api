#!/bin/bash

API="http://localhost:4741"
URL_PATH="/orders"

curl "${API}${URL_PATH}/${ID}/pull" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
  "order": {
    "status": "'"${STATUS}"'",
    "line_item": "'"${LINEITEM}"'"
  }
}'

echo
