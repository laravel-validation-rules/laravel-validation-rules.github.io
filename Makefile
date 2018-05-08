tugboat-init:
	ln -sf ${TUGBOAT_ROOT} /var/www/html
        apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
