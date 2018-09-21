#!/bin/bash

API="http://localhost:4741"
URL_PATH="/lineitems"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
   "lineitem": {
     "product_id": "'"${PRODUCTID}"'"
   }
  }'

echo
