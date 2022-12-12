clear
sudo apt update -y && sudo apt upgrade -y
sudo apt install build-essential libssl-dev cmake git -y
clear

sudo git clone https://github.com/Zeex/pawn.git ~/pawn
cd ~/pawn
sudo mkdir build && cd build
sudo cmake ../source/compiler -DCMAKE_C_FLAGS=-mbe32 -DCMAKE_BUILD_TYPE=Release
sudo make

sudo cp pawncc /usr/local/bin
sudo cp libpawnc.so /usr/local/lib
sudo ldconfig
sudo rm -r ~/pawn
clear

echo Pawncc Instalado Com sucesso 
echo Inscreva-se no canal Tarime