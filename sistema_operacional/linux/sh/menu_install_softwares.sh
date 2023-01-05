#!/bin/zsh
main() {
    echo "Selecione uma opção:"
    echo "1 - Exibir data e hora do sistema"
    echo "2 - Qual meu privílegio atual?"
    echo "3 - Atualizar o sistema"
    echo "4 - Preparar o ambiente de desenvolvimento"
    echo "5 - Kit de Softwares para desenvolvimento"
    echo "6 - Kit de ferramentas para desenvolvimento"
    echo "7 - Instalar um software em específico"

 read _opcao;
  case $_opcao in
   "1")
        _data=$(date +"%T, %d/%m/%y, %A")
        echo "$_data"
    ;;
   "2")
        who_am_i
    ;;
   "3")
        update_system
    ;;
   "4")
        prepare_enviroment
    ;;
   "5")
        update_system
        
        install_software_development
    ;;
    "6")
        update_system

        install_tools_development
    ;;
    "7")
    update_system

    echo -n "Digite o nome do pacote: "
    read _name

    install_generic "$_name"
esac
}

function who_am_i () {
    whoami
}

function update_system() {
    echo -e "\033[01;32m Atualizando pacotes com o update \033[01;37m!"

    if ! apt-get update
        then
            echo -e "\033[01;31m Não foi possível atualizar os repositórios. Verifique seu arquivo /etc/apt/source.list \033[01;37m"
            exit 1

        else
            echo -e "\033[01;32m Atualização feita com sucesso \033[01;37m"
    fi

    echo -e "\033[01;32m Atualizando pacotes com upgrade \033[01;37m!"
        
    if ! apt-get upgrade
        then
            echo -e "\033[01;31m Não foi possível atualizar os repositórios. Verifique seu arquivo /etc/apt/source.list \033[01;37m"
            exit 1

        else
            echo -e "\033[01;32m Atualização feita com sucesso \033[01;37m"
    fi

    echo -e "\033[01;32m Atualizando a distribuição \033[01;37m!"

    if ! apt-get dist-upgrade -y
        then
            echo -e "\033[01;31m Não foi possível atualizar a distro \033[01;37m"
            exit 1

    else
        echo -e "\033[01;32m Atualização feita com sucesso \033[01;37m"
    fi

    echo -e "\033[01;32m Atualizando a distribuição de modo full \033[01;37m!"

    if ! apt-get full-upgrade -y
        then
            echo -e "\033[01;31m Não foi possível atualizar a distro \033[01;37m"
            exit 1

    else
            echo -e "\033[01;32m Atualização feita com sucesso \033[01;37m"
    fi

    echo -e "\033[01;32m Limpando os pacotes não usados \033[01;37m!"

    if ! apt-get autoclean
        then
            echo -e "\033[01;31m Não foi possível instalar o pacote \033[01;37m"
            exit 1

    else
            echo -e "\033[01;32m Atualização feita com sucesso \033[01;37m"
    fi

    echo -e "\033[01;32m Autoremovendo os pacotes não usados \033[01;37m!"

    if ! apt-get autoremove
        then
            echo -e "\033[01;31m Não foi possível instalar o pacote \033[01;37m"
            exit 1

    else
            echo -e "\033[01;32m Atualização feita com sucesso \033[01;37m"
    fi

    echo -e "\033[01;32m Purgando os pacotes não usados \033[01;37m!"

    if ! apt-get purge
        then
            echo -e "\033[01;31m Não foi possível instalar o pacote \033[01;37m"
            exit 1

    else
            echo -e "\033[01;32m Atualização feita com sucesso \033[01;37m"
    fi

    echo -e "Instalação finalizada"
}

function install_generic () {
    echo -e "\033[01;32m Atualizando pacotes com o update \033[01;37m!"

    if ! apt-get install $_name

        then
            echo -e "\033[01;31m Não foi possível instalar o pacote $_name \033[01;37m"
            exit 1
    fi

    echo "Instalação finalizada"
}

function install_software_development () {

    _nvm="nvm"
    echo -e "\033[01;32m Instalando o node com $_nvm \033[01;37m!"

    if ! curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | zsh
        then
            echo -e "\033[01;31m Não foi possível instalar o $_nvm \033[01;37m"
            exit 1
        else
            echo -e "\033[01;32m Instalação feita com sucesso \033[01;37m"
    fi

    _angular="angular cli"
    echo -e "\033[01;32m Instalando $_angular \033[01;37m!"

    if ! npm i -g @angular/cli
        then
            echo -e "\033[01;31m Não foi possível instalar o $_angular \033[01;37m"
            exit 1
        else
            echo -e "\033[01;32m Instalação feita com sucesso \033[01;37m"
    fi

    _angularclighpages="angular cli pages"
    echo -e "\033[01;32m Instalando $_angularclighpages \033[01;37m!"

    if ! npm install -g angular-cli-ghpages
        then
            echo -e "\033[01;31m Não foi possível instalar o $_angularclighpages \033[01;37m"
            exit 1
        else
            echo -e "\033[01;32m Instalação feita com sucesso \033[01;37m"
    fi

    _firebase="firebase tools"
    echo -e "\033[01;32m Instalando $_firebase \033[01;37m!"

    if ! npm install -g firebase-tools
        then
            echo -e "\033[01;31m Não foi possível instalar o $_firebase \033[01;37m"
            exit 1
        else
            echo -e "\033[01;32m Instalação feita com sucesso \033[01;37m"
    fi

    _typescript="typescript"
    echo -e "\033[01;32m Instalando $_typescript \033[01;37m!"

    if ! npm install -g typescript
        then
            echo -e "\033[01;31m Não foi possível instalar o $_typescript \033[01;37m"
            exit 1
        else
            echo -e "\033[01;32m Instalação feita com sucesso \033[01;37m"
    fi

    _tsnode="ts-node"
    echo -e "\033[01;32m Instalando $_tsnode \033[01;37m!"

    if ! npm i -g ts-node
        then
            echo -e "\033[01;31m Não foi possível instalar o $_tsnode \033[01;37m"
            exit 1
        else
            echo -e "\033[01;32m Instalação feita com sucesso \033[01;37m"
    fi

    _jsonserver="json-server"
    echo -e "\033[01;32m Instalando $_jsonserver \033[01;37m!"

    if ! npm install -g json-server
        then
            echo -e "\033[01;31m Não foi possível instalar o $_jsonserver \033[01;37m"
            exit 1
        else
            echo -e "\033[01;32m Instalação feita com sucesso \033[01;37m"
    fi

    _ionic="ionic cli"
    echo -e "\033[01;32m Instalando $_ionic \033[01;37m!"

    if ! npm i -g @ionic/cli cordova cordova-res native-run
        then
            echo -e "\033[01;31m Não foi possível instalar o $_ionic \033[01;37m"
            exit 1
        else
            echo -e "\033[01;32m Instalação feita com sucesso \033[01;37m"
    fi

    _expo="expo cli"
    echo -e "\033[01;32m Instalando $_expo \033[01;37m!"

    if ! npm install -g expo-cli
        then
            echo -e "\033[01;31m Não foi possível instalar o $_expo \033[01;37m"
            exit 1
        else
            echo -e "\033[01;32m Instalação feita com sucesso \033[01;37m"
    fi

    _androidstudio="android-studio"
    echo -e "\033[01;32m Instalando com $_androidstudio \033[01;37m!"

    if ! apt-get install android-studio
        then
            echo -e "\033[01;31m Não foi possível instalar o $_androidstudio \033[01;37m"
            exit 1
        else
            echo -e "\033[01;32m Instalação feita com sucesso \033[01;37m"
    fi

    _zipalign="zipalign"
    echo -e "\033[01;32m Instalando com $_zipalign \033[01;37m!"

    if ! apt-get install zipalign
        then
            echo -e "\033[01;31m Não foi possível instalar o $_zipalign \033[01;37m"
            exit 1
        else
            echo -e "\033[01;32m Instalação feita com sucesso \033[01;37m"
    fi

    _python3="python-3"
    echo -e "\033[01;32m Instalando com $_python3 \033[01;37m!"

    if ! apt-get install python-3
        then
            echo -e "\033[01;31m Não foi possível instalar o $_python3 \033[01;37m"
            exit 1
        else
            echo -e "\033[01;32m Instalação feita com sucesso \033[01;37m"
    fi

    _pip="pip"
    echo -e "\033[01;32m Instalando com $_pip \033[01;37m!"

    if ! apt-get install pip
        then
            echo -e "\033[01;31m Não foi possível instalar o $_pip \033[01;37m"
            exit 1
        else
            echo -e "\033[01;32m Instalação feita com sucesso \033[01;37m"
    fi

    _sdk="sdk"
    echo -e "\033[01;32m Instalando com $_sdk \033[01;37m!"

    if ! apt-get install sdk
        then
            echo -e "\033[01;31m Não foi possível instalar o $_sdk \033[01;37m"
            exit 1
        else
            echo -e "\033[01;32m Instalação feita com sucesso \033[01;37m"
    fi

    _docker="docker"
    echo -e "\033[01;32m Instalando com $_docker \033[01;37m!"

    if ! apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
        then
            echo -e "\033[01;31m Não foi possível instalar o $_docker \033[01;37m"
            exit 1
        else
            echo -e "\033[01;32m Instalação feita com sucesso \033[01;37m"
    fi

    _dockercompose="docker-compose"
    echo -e "\033[01;32m Instalando com $_dockercompose \033[01;37m!"

    if ! apt-get install docker-compose
        then
            echo -e "\033[01;31m Não foi possível instalar o $_dockercompose \033[01;37m"
            exit 1
        else
            echo -e "\033[01;32m Instalação feita com sucesso \033[01;37m"
    fi

    _mysql="mysql-server"
    echo -e "\033[01;32m Instalando com $_mysql \033[01;37m!"

    if ! apt-get install mysql-server
        then
            echo -e "\033[01;31m Não foi possível instalar o $_mysql \033[01;37m"
            exit 1
        else
            echo -e "\033[01;32m Instalação feita com sucesso \033[01;37m"
    fi

}

function install_tools_development () {

    _staruml="staruml"
    echo -e "\033[01;32m Instalando o com $_staruml \033[01;37m!"

    if ! apt-get install staruml
        then
            echo -e "\033[01;31m Não foi possível instalar o $_staruml \033[01;37m"
            exit 1
        else
            echo -e "\033[01;32m Instalação feita com sucesso \033[01;37m"
    fi

    _tree="tree"
    echo -e "\033[01;32m Instalando o com $_tree \033[01;37m!"

    if ! apt-get install tree
        then
            echo -e "\033[01;31m Não foi possível instalar o $_tree \033[01;37m"
            exit 1
        else
            echo -e "\033[01;32m Instalação feita com sucesso \033[01;37m"
    fi

    _virtualbox="virtualbox"
    echo -e "\033[01;32m Instalando o com $_virtualbox \033[01;37m!"

    if ! apt-get install virtualbox
        then
            echo -e "\033[01;31m Não foi possível instalar o $_virtualbox \033[01;37m"
            exit 1
        else
            echo -e "\033[01;32m Instalação feita com sucesso \033[01;37m"
    fi

    _libreoffice="libreoffice"
    echo -e "\033[01;32m Instalando com $_libreoffice \033[01;37m!"

    if ! snap install libreoffice
        then
            echo -e "\033[01;31m Não foi possível instalar o $_libreoffice \033[01;37m"
            exit 1
        else
            echo -e "\033[01;32m Instalação feita com sucesso \033[01;37m"
    fi

    _obsidian="obsidian"
    echo -e "\033[01;32m Instalando com $_obsidian \033[01;37m!"

    if ! snap install obsidian
        then
            echo -e "\033[01;31m Não foi possível instalar o $_obsidian \033[01;37m"
            exit 1
        else
            echo -e "\033[01;32m Instalação feita com sucesso \033[01;37m"
    fi

    _vscode="code"
    echo -e "\033[01;32m Instalando com $_vscode \033[01;37m!"

    if ! snap install code
        then
            echo -e "\033[01;31m Não foi possível instalar o $_vscode \033[01;37m"
            exit 1
        else
            echo -e "\033[01;32m Instalação feita com sucesso \033[01;37m"
    fi

    _mysql_workbench="mysql-workbench-community"
    echo -e "\033[01;32m Instalando com $_mysql_workbench \033[01;37m!"

    if ! snap install mysql-workbench-community
        then
            echo -e "\033[01;31m Não foi possível instalar o $_mysql_workbench \033[01;37m"
            exit 1
        else
            echo -e "\033[01;32m Instalação feita com sucesso \033[01;37m"
    fi

    _postman="postman"
    echo -e "\033[01;32m Instalando com $_postman \033[01;37m!"

    if ! snap install postman
        then
            echo -e "\033[01;31m Não foi possível instalar o $_postman \033[01;37m"
            exit 1
        else
            echo -e "\033[01;32m Instalação feita com sucesso \033[01;37m"
    fi

}

function prepare_enviroment () {

    _dpkg="dpkg"
    echo -e "\033[01;32m Instalando o com $_dpkg \033[01;37m!"

    if ! dpkg --configure -a
        then
            echo -e "\033[01;31m Não foi possível instalar o $_dpkg \033[01;37m"
            exit 1
        else
            echo -e "\033[01;32m Instalação feita com sucesso \033[01;37m"
    fi

    _essentials_build="essentials linux"
    echo -e "\033[01;32m Instalando o com $_essentials_build \033[01;37m!"

    if ! apt install dkms make perl gcc build-essential git curl -y
        then
            echo -e "\033[01;31m Não foi possível instalar o $_essentials_build \033[01;37m"
            exit 1
        else
            echo -e "\033[01;32m Instalação feita com sucesso \033[01;37m"
    fi

    _essentials_docker="essentials docker"
    echo -e "\033[01;32m Instalando o com $_essentials_docker \033[01;37m!"

    if ! apt-get install \
         ca-certificates \
         curl \
         gnupg \
         lsb-release
        then
            echo -e "\033[01;31m Não foi possível instalar o $_essentials_docker \033[01;37m"
            exit 1
        else
            echo -e "\033[01;32m Instalação feita com sucesso \033[01;37m"
    fi

    _key_docker="gerando a chave"
    echo -e "\033[01;32m Instalando o com $_key_docker \033[01;37m!"

    if ! mkdir -p /etc/apt/keyrings && curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg && chmod a+r /etc/apt/keyrings/docker.gpg
        then
            echo -e "\033[01;31m Não foi possível instalar o $_key_docker \033[01;37m"
            exit 1
        else
            echo -e "\033[01;32m Instalação feita com sucesso \033[01;37m"
    fi

    _set_repository="setando o repositório"
    echo -e "\033[01;32m Instalando o com $_set_repository \033[01;37m!"

    if ! echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
        then
            echo -e "\033[01;31m Não foi possível instalar o $_set_repository \033[01;37m"
            exit 1
        else
            echo -e "\033[01;32m Instalação feita com sucesso \033[01;37m"
    fi

    _firacode="fonte firacode"
    echo -e "\033[01;32m Instalando o com $_firacode \033[01;37m!"

    if ! apt install fonts-firacode
        then
            echo -e "\033[01;31m Não foi possível instalar o $_firacode \033[01;37m"
            exit 1
        else
            echo -e "\033[01;32m Instalação feita com sucesso \033[01;37m"
    fi

    _inxi="inxi"
    echo -e "\033[01;32m Instalando o com $_inxi \033[01;37m!"

    if ! apt-get install inxi
        then
            echo -e "\033[01;31m Não foi possível instalar o $_inxi \033[01;37m"
            exit 1
        else
            echo -e "\033[01;32m Instalação feita com sucesso \033[01;37m"
    fi

}

main