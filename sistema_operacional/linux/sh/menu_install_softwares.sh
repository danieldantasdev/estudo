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

    # if ! install_nvm && git clone git://github.com/creationix/nvm.git ~/.nvm && source ~/.nvm/nvm.sh
    if !  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash && source ~/.nvm/nvm.sh && export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
        then
            echo -e "\033[01;31m Não foi possível instalar o $_nvm \033[01;37m"
            # exit 1
        else
            echo -e "\033[01;32m Instalação feita com sucesso \033[01;37m"
    fi

    _source_rc="source_rc"
    echo -e "\033[01;32m Instalando o node com $_source_rc \033[01;37m!"

    if ! source ~/.bashrc  
        then
            echo -e "\033[01;31m Não foi possível instalar o $_source_rc \033[01;37m"
            exit 1
        else
            echo -e "\033[01;32m Instalação feita com sucesso \033[01;37m"
    fi

    _node="node"
    echo -e "\033[01;32m Instalando $_node \033[01;37m!"

    if ! nvm install node 16.0.0
        then
            echo -e "\033[01;31m Não foi possível instalar o $_node \033[01;37m"
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

    _software_properties_common="software-properties-common"
    echo -e "\033[01;32m Instalando o com $_software_properties_common \033[01;37m!"

    if ! apt install software-properties-common
        then
            echo -e "\033[01;31m Não foi possível instalar o $_software_properties_common \033[01;37m"
            exit 1
        else
            echo -e "\033[01;32m Instalação feita com sucesso \033[01;37m"
    fi

    _repository_universe="repository universe"
    echo -e "\033[01;32m Instalando o com $_repository_universe \033[01;37m!"

    if ! add-apt-repository universe && add-apt-repository "deb http://archive.ubuntu.com/ubuntu $(lsb_release -sc) universe"
        then
            echo -e "\033[01;31m Não foi possível instalar o $_repository_universe \033[01;37m"
            exit 1
        else
            echo -e "\033[01;32m Instalação feita com sucesso \033[01;37m"
    fi

    _essentials_build="essentials linux"
    echo -e "\033[01;32m Instalando o com $_essentials_build \033[01;37m!"

    if ! apt install dkms make perl gcc build-essential git curl unzip ttf-mscorefonts-installer fontconfig apt-transport-https ca-certificates wget -y
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
  $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null
        then
            echo -e "\033[01;31m Não foi possível instalar o $_set_repository \033[01;37m"
            exit 1
        else
            echo -e "\033[01;32m Instalação feita com sucesso \033[01;37m"
    fi

    _dpkg="dpkg"
    echo -e "\033[01;32m Instalando o com $_dpkg \033[01;37m!"

    if ! dpkg --configure -a
        then
            echo -e "\033[01;31m Não foi possível instalar o $_dpkg \033[01;37m"
            exit 1
        else
            echo -e "\033[01;32m Instalação feita com sucesso \033[01;37m"
    fi

    _firacode="fonte firacode"
    echo -e "\033[01;32m Instalando o com $_firacode \033[01;37m!"

    if ! install_font_firacode
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

function install_font_firacode () {
    #!/usr/bin/env zsh
    fonts_dir="${HOME}/.local/share/fonts"
    if [ ! -d "${fonts_dir}" ]; then
        echo "mkdir -p $fonts_dir"
        mkdir -p "${fonts_dir}"
    else
        echo "Found fonts dir $fonts_dir"
    fi

    version=5.2
    zip=Fira_Code_v${version}.zip
    curl --fail --location --show-error https://github.com/tonsky/FiraCode/releases/download/${version}/${zip} --output ${zip}
    unzip -o -q -d ${fonts_dir} ${zip}
    rm ${zip}

    echo "fc-cache -f"
    fc-cache -f
}

function install_nvm () {
    #!/usr/bin/env bash

    { # this ensures the entire script is downloaded #

    nvm_has() {
    type "$1" > /dev/null 2>&1
    }

    nvm_install_dir() {
    echo "${NVM_DIR:-"$HOME/.nvm"}"
    }

    nvm_latest_version() {
    echo "v0.33.0"
    }

    #
    # Outputs the location to NVM depending on:
    # * The availability of $NVM_SOURCE
    # * The method used ("script" or "git" in the script, defaults to "git")
    # NVM_SOURCE always takes precedence unless the method is "script-nvm-exec"
    #
    nvm_source() {
    local NVM_METHOD
    NVM_METHOD="$1"
    local NVM_SOURCE_URL
    NVM_SOURCE_URL="$NVM_SOURCE"
    if [ "_$NVM_METHOD" = "_script-nvm-exec" ]; then
        NVM_SOURCE_URL="https://raw.githubusercontent.com/creationix/nvm/$(nvm_latest_version)/nvm-exec"
    elif [ -z "$NVM_SOURCE_URL" ]; then
        if [ "_$NVM_METHOD" = "_script" ]; then
        NVM_SOURCE_URL="https://raw.githubusercontent.com/creationix/nvm/$(nvm_latest_version)/nvm.sh"
        elif [ "_$NVM_METHOD" = "_git" ] || [ -z "$NVM_METHOD" ]; then
        NVM_SOURCE_URL="https://github.com/creationix/nvm.git"
        else
        echo >&2 "Unexpected value \"$NVM_METHOD\" for \$NVM_METHOD"
        return 1
        fi
    fi
    echo "$NVM_SOURCE_URL"
    }

    #
    # Node.js version to install
    #
    nvm_node_version() {
    echo "$NODE_VERSION"
    }

    nvm_download() {
    if nvm_has "curl"; then
        curl -q "$@"
    elif nvm_has "wget"; then
        # Emulate curl with wget
        ARGS=$(echo "$*" | command sed -e 's/--progress-bar /--progress=bar /' \
                            -e 's/-L //' \
                            -e 's/-I /--server-response /' \
                            -e 's/-s /-q /' \
                            -e 's/-o /-O /' \
                            -e 's/-C - /-c /')
        # shellcheck disable=SC2086
        eval wget $ARGS
    fi
    }

    install_nvm_from_git() {
    local INSTALL_DIR
    INSTALL_DIR="$(nvm_install_dir)"

    if [ -d "$INSTALL_DIR/.git" ]; then
        echo "=> nvm is already installed in $INSTALL_DIR, trying to update using git"
        command printf "\r=> "
        command git --git-dir="$INSTALL_DIR"/.git --work-tree="$INSTALL_DIR" fetch 2> /dev/null || {
        echo >&2 "Failed to update nvm, run 'git fetch' in $INSTALL_DIR yourself."
        exit 1
        }
    else
        # Cloning to $INSTALL_DIR
        echo "=> Downloading nvm from git to '$INSTALL_DIR'"
        command printf "\r=> "
        mkdir -p "${INSTALL_DIR}"
        if [ "$(ls -A "${INSTALL_DIR}")" ]; then
        command git init "${INSTALL_DIR}" || {
            echo >&2 'Failed to initialize nvm repo. Please report this!'
            exit 2
        }
        command git --git-dir="${INSTALL_DIR}/.git" remote add origin "$(nvm_source)" 2> /dev/null \
            || command git --git-dir="${INSTALL_DIR}/.git" remote set-url origin "$(nvm_source)" || {
            echo >&2 'Failed to add remote "origin" (or set the URL). Please report this!'
            exit 2
        }
        command git --git-dir="${INSTALL_DIR}/.git" fetch origin --tags || {
            echo >&2 'Failed to fetch origin with tags. Please report this!'
            exit 2
        }
        else
        command git clone "$(nvm_source)" "${INSTALL_DIR}" || {
            echo >&2 'Failed to clone nvm repo. Please report this!'
            exit 2
        }
        fi
    fi
    command git --git-dir="$INSTALL_DIR"/.git --work-tree="$INSTALL_DIR" checkout -f --quiet "$(nvm_latest_version)"
    if [ ! -z "$(command git --git-dir="$INSTALL_DIR"/.git --work-tree="$INSTALL_DIR" show-ref refs/heads/master)" ]; then
        if command git --git-dir="$INSTALL_DIR"/.git --work-tree="$INSTALL_DIR" branch --quiet 2>/dev/null; then
        command git --git-dir="$INSTALL_DIR"/.git --work-tree="$INSTALL_DIR" branch --quiet -D master >/dev/null 2>&1
        else
        echo >&2 "Your version of git is out of date. Please update it!"
        command git --git-dir="$INSTALL_DIR"/.git --work-tree="$INSTALL_DIR" branch -D master >/dev/null 2>&1
        fi
    fi

    echo "=> Compressing and cleaning up git repository"
    if ! command git --git-dir="$INSTALL_DIR"/.git --work-tree="$INSTALL_DIR" gc --aggressive --prune=now ; then
        echo >&2 "Your version of git is out of date. Please update it!"
    fi
    return
    }

    #
    # Automatically install Node.js
    #
    nvm_install_node() {
    local NODE_VERSION
    NODE_VERSION="$(nvm_node_version)"

    if [ -z "$NODE_VERSION" ]; then
        return 0
    fi

    echo "=> Installing Node.js version $NODE_VERSION"
    nvm install "$NODE_VERSION"
    local CURRENT_NVM_NODE

    CURRENT_NVM_NODE="$(nvm_version current)"
    if [ "$(nvm_version "$NODE_VERSION")" == "$CURRENT_NVM_NODE" ]; then
        echo "=> Node.js version $NODE_VERSION has been successfully installed"
    else
        echo >&2 "Failed to install Node.js $NODE_VERSION"
    fi
    }

    install_nvm_as_script() {
    local INSTALL_DIR
    INSTALL_DIR="$(nvm_install_dir)"
    local NVM_SOURCE_LOCAL
    NVM_SOURCE_LOCAL=$(nvm_source script)
    local NVM_EXEC_SOURCE
    NVM_EXEC_SOURCE=$(nvm_source script-nvm-exec)

    # Downloading to $INSTALL_DIR
    mkdir -p "$INSTALL_DIR"
    if [ -f "$INSTALL_DIR/nvm.sh" ]; then
        echo "=> nvm is already installed in $INSTALL_DIR, trying to update the script"
    else
        echo "=> Downloading nvm as script to '$INSTALL_DIR'"
    fi
    nvm_download -s "$NVM_SOURCE_LOCAL" -o "$INSTALL_DIR/nvm.sh" || {
        echo >&2 "Failed to download '$NVM_SOURCE_LOCAL'"
        return 1
    }
    nvm_download -s "$NVM_EXEC_SOURCE" -o "$INSTALL_DIR/nvm-exec" || {
        echo >&2 "Failed to download '$NVM_EXEC_SOURCE'"
        return 2
    }
    chmod a+x "$INSTALL_DIR/nvm-exec" || {
        echo >&2 "Failed to mark '$INSTALL_DIR/nvm-exec' as executable"
        return 3
    }
    }

    #
    # Detect profile file if not specified as environment variable
    # (eg: PROFILE=~/.myprofile)
    # The echo'ed path is guaranteed to be an existing file
    # Otherwise, an empty string is returned
    #
    nvm_detect_profile() {
    if [ -n "${PROFILE}" ] && [ -f "${PROFILE}" ]; then
        echo "${PROFILE}"
        return
    fi

    local DETECTED_PROFILE
    DETECTED_PROFILE=''
    local SHELLTYPE
    SHELLTYPE="$(basename "/$SHELL")"

    if [ "$SHELLTYPE" = "bash" ]; then
        if [ -f "$HOME/.bashrc" ]; then
        DETECTED_PROFILE="$HOME/.bashrc"
        elif [ -f "$HOME/.bash_profile" ]; then
        DETECTED_PROFILE="$HOME/.bash_profile"
        fi
    elif [ "$SHELLTYPE" = "zsh" ]; then
        DETECTED_PROFILE="$HOME/.zshrc"
    fi

    if [ -z "$DETECTED_PROFILE" ]; then
        if [ -f "$HOME/.profile" ]; then
        DETECTED_PROFILE="$HOME/.profile"
        elif [ -f "$HOME/.bashrc" ]; then
        DETECTED_PROFILE="$HOME/.bashrc"
        elif [ -f "$HOME/.bash_profile" ]; then
        DETECTED_PROFILE="$HOME/.bash_profile"
        elif [ -f "$HOME/.zshrc" ]; then
        DETECTED_PROFILE="$HOME/.zshrc"
        fi
    fi

    if [ ! -z "$DETECTED_PROFILE" ]; then
        echo "$DETECTED_PROFILE"
    fi
    }

    #
    # Check whether the user has any globally-installed npm modules in their system
    # Node, and warn them if so.
    #
    nvm_check_global_modules() {
    command -v npm >/dev/null 2>&1 || return 0

    local NPM_VERSION
    NPM_VERSION="$(npm --version)"
    NPM_VERSION="${NPM_VERSION:--1}"
    [ "${NPM_VERSION%%[!-0-9]*}" -gt 0 ] || return 0

    local NPM_GLOBAL_MODULES
    NPM_GLOBAL_MODULES="$(
        npm list -g --depth=0 |
        command sed '/ npm@/d' |
        command sed '/ (empty)$/d'
    )"

    local MODULE_COUNT
    MODULE_COUNT="$(
        command printf %s\\n "$NPM_GLOBAL_MODULES" |
        command sed -ne '1!p' |                     # Remove the first line
        wc -l | tr -d ' '                           # Count entries
    )"

    if [ "${MODULE_COUNT}" != '0' ]; then
        # shellcheck disable=SC2016
        echo '=> You currently have modules installed globally with `npm`. These will no'
        # shellcheck disable=SC2016
        echo '=> longer be linked to the active version of Node when you install a new node'
        # shellcheck disable=SC2016
        echo '=> with `nvm`; and they may (depending on how you construct your `$PATH`)'
        # shellcheck disable=SC2016
        echo '=> override the binaries of modules installed with `nvm`:'
        echo

        command printf %s\\n "$NPM_GLOBAL_MODULES"
        echo '=> If you wish to uninstall them at a later point (or re-install them under your'
        # shellcheck disable=SC2016
        echo '=> `nvm` Nodes), you can remove them from the system Node as follows:'
        echo
        echo '     $ nvm use system'
        echo '     $ npm uninstall -g a_module'
        echo
    fi
    }

    nvm_do_install() {
    if [ -z "${METHOD}" ]; then
        # Autodetect install method
        if nvm_has git; then
        install_nvm_from_git
        elif nvm_has nvm_download; then
        install_nvm_as_script
        else
        echo >&2 'You need git, curl, or wget to install nvm'
        exit 1
        fi
    elif [ "${METHOD}" = 'git' ]; then
        if ! nvm_has git; then
        echo >&2 "You need git to install nvm"
        exit 1
        fi
        install_nvm_from_git
    elif [ "${METHOD}" = 'script' ]; then
        if ! nvm_has nvm_download; then
        echo >&2 "You need curl or wget to install nvm"
        exit 1
        fi
        install_nvm_as_script
    fi

    echo

    local NVM_PROFILE
    NVM_PROFILE="$(nvm_detect_profile)"
    local INSTALL_DIR
    INSTALL_DIR="$(nvm_install_dir)"

    SOURCE_STR="\nexport NVM_DIR=\"$INSTALL_DIR\"\n[ -s \"\$NVM_DIR/nvm.sh\" ] && \\. \"\$NVM_DIR/nvm.sh\"  # This loads nvm\n"
    COMPLETION_STR="[ -s \"\$NVM_DIR/bash_completion\" ] && \\. \"\$NVM_DIR/bash_completion\"  # This loads nvm bash_completion\n"
    BASH_OR_ZSH=false

    if [ -z "${NVM_PROFILE-}" ] ; then
        echo "=> Profile not found. Tried ${NVM_PROFILE} (as defined in \$PROFILE), ~/.bashrc, ~/.bash_profile, ~/.zshrc, and ~/.profile."
        echo "=> Create one of them and run this script again"
        echo "=> Create it (touch ${NVM_PROFILE}) and run this script again"
        echo "   OR"
        echo "=> Append the following lines to the correct file yourself:"
        command printf "${SOURCE_STR}"
    else
        case "${NVM_PROFILE-}" in
        ".bashrc" | ".bash_profile" | ".zshrc")
            BASH_OR_ZSH=true
        ;;
        esac
        if ! command grep -qc '/nvm.sh' "$NVM_PROFILE"; then
        echo "=> Appending nvm source string to $NVM_PROFILE"
        command printf "${SOURCE_STR}" >> "$NVM_PROFILE"
        else
        echo "=> nvm source string already in ${NVM_PROFILE}"
        fi
        # shellcheck disable=SC2016
        if ${BASH_OR_ZSH} && ! command grep -qc '$NVM_DIR/bash_completion' "$NVM_PROFILE"; then
        echo "=> Appending bash_completion source string to $NVM_PROFILE"
        command printf "$COMPLETION_STR" >> "$NVM_PROFILE"
        else
        echo "=> bash_completion source string already in ${NVM_PROFILE}"
        fi
    fi
    if ${BASH_OR_ZSH} && [ -z "${NVM_PROFILE-}" ] ; then
        echo "=> Please also append the following lines to the if you are using bash/zsh shell:"
        command printf "${COMPLETION_STR}"
    fi

    # Source nvm
    # shellcheck source=/dev/null
    \. "${INSTALL_DIR}/nvm.sh"

    nvm_check_global_modules

    nvm_install_node

    nvm_reset

    echo "=> Close and reopen your terminal to start using nvm or run the following to use it now:"
    command printf "${SOURCE_STR}"
    if ${BASH_OR_ZSH} ; then
        command printf " && ${COMPLETION_STR}"
    fi
    }

    #
    # Unsets the various functions defined
    # during the execution of the install script
    #
    nvm_reset() {
    unset -f nvm_reset nvm_has nvm_latest_version \
        nvm_source nvm_download install_nvm_as_script install_nvm_from_git \
        nvm_detect_profile nvm_check_global_modules nvm_do_install \
        nvm_install_dir nvm_node_version nvm_install_node
    }

    [ "_$NVM_ENV" = "_testing" ] || nvm_do_install

    } # this ensures the entire script is downloaded #
}

main