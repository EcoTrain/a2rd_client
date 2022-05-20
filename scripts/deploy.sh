mkdir test
git pull origin master

systemstl daemon-reload
systemctl restart a2rd_client.service
