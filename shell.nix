{ pkgs ? import <nixpkgs> {} }:

# let
#   DATABASE_USER = builtins.getEnv "DATABASE_USER";
#   DATABASE_PASS = builtins.getEnv "DATABASE_PASS";
#   DATABASE_HOST = builtins.getEnv "DATABASE_HOST";
#   DATABASE_NAME = builtins.getEnv "DATABASE_NAME";
# in
pkgs.mkShell {
  buildInputs = with pkgs; [
    docker
    docker-compose
    docker-credential-helpers
    mysql84
    nodejs_22
    yarn
  ];

  shellHook = ''
    export PATH=$PATH:node_modules/.bin
  '';
}