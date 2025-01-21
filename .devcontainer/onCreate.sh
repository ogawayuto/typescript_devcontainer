# echo y | /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
# export PATH="/home/linuxbrew/.linuxbrew/bin:$PATH"
# brew install gitleaks

mkdir /tmp/gitleaks
curl -Lo /tmp/gitleaks/gitleaks_8.23.1_linux_x64.tar.gz https://github.com/gitleaks/gitleaks/releases/download/v8.23.1/gitleaks_8.23.1_linux_x64.tar.gz
tar -zxvf /tmp/gitleaks/gitleaks_8.23.1_linux_x64.tar.gz -C /tmp/gitleaks
chmod +x /tmp/gitleaks/gitleaks
sudo mv /tmp/gitleaks/gitleaks /usr/local/bin/gitleaks
rm -rf /tmp/gitleaks

curl -1sLf 'https://dl.cloudsmith.io/public/evilmartians/lefthook/setup.deb.sh' | sudo -E bash
sudo apt install lefthook
