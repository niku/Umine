Vagrant.configure(2) do |config|
  config.vm.box = "chef/debian-8.0"

  config.vm.network :forwarded_port, guest: 8000, host: 8000
  config.vm.provision :shell, path: "./vagrantfiles/setup.sh"
end
