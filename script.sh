expect <<EOF
spawn yarn run deploy
expect "assword"
send "$TOKEN\r"
interact
EOF