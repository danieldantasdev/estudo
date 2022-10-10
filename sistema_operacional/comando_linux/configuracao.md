# MySql

wget -c https://repo.mysql.com//mysql-apt-config_0.8.22-1_all.deb
sudo apt update
sudo apt install mysql-server

-- mysqldump -u root -p dbsenac > dbsenac.sql

-- mysql -u root -p
-- mysql -h localhost -u root -p

-- mysql -h 170.81.168.10 -u ads -p
-- mysql -h 170.81.168.10 -u eng2 -p

# Zsh + oh-my-zsh

## !/bin/bash

## Executar comandos a seguir para atualizar os pacotes
sudo apt update -y
sudo apt upgrade -y

## Instalar pacotes a seguir
sudo apt install dkms make perl gcc build-essential git curl -y
ou 
sudo apt install curl

## Instalar Python 3.10 (opcional)
sudo apt install python3.10-full python3.10-dev

# Baixar e instalar VS Code: https://code.visualstudio.com/download
# Baixar e instalar Google Chrome: https://www.google.com/intl/pt-BR/chrome/

# Abaixo tudo é opcional

## Instalar e configurar ZSH
sudo apt install zsh -y
chsh -s /bin/zsh
zsh

## Mudando o shel padrão do linux
sudo gedit /etc/passwd

## Instalar Oh-my-zsh! -> https://ohmyz.sh/
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

ou

sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

## Instalar Spaceship Prompt
### https://github.com/spaceship-prompt/spaceship-prompt
git clone https://github.com/spaceship-prompt/spaceship-prompt.git "$ZSH_CUSTOM/themes/spaceship-prompt" --depth=1
ln -s "$ZSH_CUSTOM/themes/spaceship-prompt/spaceship.zsh-theme" "$ZSH_CUSTOM/themes/spaceship.zsh-theme"

## Mudar ~/.zshrc -> ZSH_THEME="spaceship"

## Instalar Zsh Autosuggestions
### https://github.com/zsh-users/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

## Instalar Zsh Syntax Highlighting
### https://github.com/zsh-users/zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

## Instalar zsh completions 
git clone https://github.com/zsh-users/zsh-completions ${ZSH_CUSTOM:-${ZSH:-~/.oh-my-zsh}/custom}/plugins/zsh-completions

fpath+=${ZSH_CUSTOM:-${ZSH:-~/.oh-my-zsh}/custom}/plugins/zsh-completions/src

# Dentro do arquivo ~/.zshrc adicione as seguintes configurações:

`**SPACESHIP_PROMPT_ORDER=(
  user          # Username section
  dir           # Current directory section
  host          # Hostname section
  git           # Git section (git_branch + git_status)
  hg            # Mercurial section (hg_branch  + hg_status)
  exec_time     # Execution time
  line_sep      # Line break
  vi_mode       # Vi-mode indicator
  jobs          # Background jobs indicator
  exit_code     # Exit code section
  char          # Prompt character
)
SPACESHIP_USER_SHOW=always
SPACESHIP_PROMPT_ADD_NEWLINE=false
SPACESHIP_CHAR_SYMBOL="❯"
SPACESHIP_CHAR_SUFFIX=" "**`

> Mudar plugins

`**plugins=(git zsh-autosuggestions zsh-syntax-highlighting zsh-completions)**`

## Font optional (https://github.com/pdf/ubuntu-mono-powerline-ttf)
mkdir -p ~/.fonts
git clone https://github.com/pdf/ubuntu-mono-powerline-ttf.git ~/.fonts/ubuntu-mono-powerline-ttf
fc-cache -vf

## REBOOT!!!!!!!!!!!!!!!!!!!!!

# zinit

sh -c "$(curl -fsSL https://raw.githubusercontent.com/zdharma/zinit/master/doc/install.sh)"

> Para adicionar estes plugins ou outros que você deseja basta dentro do ~/.zshrc após a linha ### End of ZInit’s installer chunk adicionar os plugins desejados, abaixo um exemplo com os mencionados acima.

**zinit light zsh-users/zsh-completions**
**zinit light zdharma/fast-syntax-highlighting**
**zinit light zsh-users/zsh-autosuggestions**

# Instalando o gnome-terminal (omni-dark-mode)

git clone https://github.com/getomni/gnome-terminal.git

sudo apt-get install dconf-cli

cd gnome-terminal
./install.sh


# Fira Code

sudo apt install fonts-firacode


# NodeJs

sudo apt install nodejs

# Npm 

sudo apt install npm

# Java

sudo apt install jdk-default
sudo update-alternatives --config java


# Maven

sudo apt install maven

# sudo npm install -g @angular/cli


# Configurando STS

Instalar o STS
cd Downloads/
sudo mv spring-tool-suite-4-4.14.1.RELEASE-e4.23.0-linux.gtk.x86_64.tar.gz /opt
cd /opt/
ls
sudo tar zxvf spring-tool-suite-4-4.14.1.RELEASE-e4.23.0-linux.gtk.x86_64.tar.gz
ls
cd sts-4.14.1.RELEASE/
ls
sudo ./SpringToolSuite4 
sudo vi /usr/share/applications/stsLauncher.desktop


[Desktop Entry]
Name=Spring Tool Suite
Comment=Spring Tool Suite 4.14.1
Exec=/opt/sts-4.14.1.RELEASE/SpringToolSuite4
Icon=/opt/sts-4.14.1.RELEASE/icon.xpm
StartupNotify=true
Terminal=false
Type=Application
Categories=Development;IDE;Java;

:wq



# Variável ambiente JAVA

export JAVA_HOME=/usr/lib/jvm/default-java
export M3_HOME=/opt/maven
export MAVEN_HOME=/opt/maven
export PATH=${M2_HOME}/bin:${PATH}

# Postman

baixar o arquivo .tar.gz postman no site
wget https://dl.pstmn.io/download/latest/linux64 -O postman.tar.gz
sudo tar -xzf postman.tar.gz -C /opt
rm postman.tar.gz
sudo ln -s /opt/Postman/Postman /usr/bin/postman

cat > ~/.local/share/applications/postman.desktop <<EOL
[Desktop Entry]
Encoding=UTF-8
Name=Postman
Exec=postman
Icon=/opt/Postman/app/resources/app/assets/icon.png
Terminal=false
Type=Application
Categories=Development;
EOL;

# Node

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
source ~/.bashrc
nvm list-remote
nvm install v13.6.0
nvm list

----

# AzureDataStudio

sudo dpkg -i azuredatastudio-linux-1.39.1.deb

localhost,11433
sa
010394

# sqlserver

sudo docker pull mcr.microsoft.com/mssql/server

sudo docker run --name testesqlserver2017 -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=DockerSql2017" -e "MSSQL_PID=Developer" --cap-add SYS_PTRACE -p 11433:1433 -d mcr.microsoft.com/mssql/server:2022-latest

sudo docker exec -it testesqlserver2017 /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P DockerSql2017

 
