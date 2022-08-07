# Comandos Linux

$ uname -m
$ sudo apt update && sudo apt upgrade
$ sudo apt install nodejs
$ sudo apt install npm
$ node -v
$ sudo snap install --classic vscode
$ sudo apt purge code
$ sudo apt install git
$ sudo apt update && sudo apt install git
$ git -v
$ git -version
$ sudo yum install git-all
$ apt-get install git
$ add-apt-repository ppa:git-core/ppa
$ clear
$ pwd
$ ls
$ ls -a
$ git config --global user.name "lobinhodev"
$ git config --global user.email "contatolobinhodev@gmail.com"
$ cat .gitconfig
$ npm install -g @angular/cli
$ ng
$ sudo apt install python-software-properties
$ curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
$ node --version
$ npm --version
$ sudo npm install -g @angular/cli
$ sudo apt install default-jdk
$ javac -version
$ printenv | less
$ echo $USER
$ date

$ ssh-keygen -t ed25519 -C "contatolobinhodev@gmail.com"
$ eval "$(ssh-agent -s)"
$ sudo -s -h
$ exec ssh-agent bash
$ ssh-add ~/.ssh/id_ed25519
$ cat ~/.ssh/id_ed25519.pub

$ cd Downloads/
$ cd /opt/
$ sudo mv spring-tool-suite-4-4.14.1.RELEASE-e4.23.0-linux.gtk.x86_64.tar.gz /opt
$ ls
$ cd /opt/
$ ls
$ sudo tar zxvf spring-tool-suite-4-4.14.1.RELEASE-e4.23.0-linux.gtk.x86_64.tar.gz 
$ ls
$ cd sts-4.14.1.RELEASE/
$ ls
$ sudo ./SpringToolSuite4
$ sudo vi /usr/share/applications/stsLauncher.desktop
$ cat  /usr/share/applications/stsLauncher.desktop

$ sudo wget https://www-us.apache.org/dist/maven/maven-3/3.6.0/binaries/apache-maven-3.6.0-bin.tar.gz
$ wget https://downloads.apache.org/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.tar.gz -P /tmp
$ sudo tar xf /tmp/apache-maven-*.tar.gz -C /opt
$ sudo vi /etc/profile.d/maven.sh
$ sudo chmod +x /etc/profile.d/maven.sh
$ source /etc/profile.d/maven.sh
$ mvn --version

sudo dpkg --configure -a
sudo apt-get -f install
sudo apt-get -f remove
sudo apt-get update
sudo apt-get upgrade 

sudo apt-get dist-upgrade 




