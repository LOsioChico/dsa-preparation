{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-23.11"; # or "unstable"

  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.scala-cli
    pkgs.corepack_21
  ];

  # Sets environment variables in the workspace
  env = { };
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      "christian-kohler.path-intellisense"
      "eamodio.gitlens"
      "humao.rest-client"
      "miguelsolorio.fluent-icons"
      "scala-lang.scala"
      "scalameta.metals"
      "semanticdiff.semanticdiff"
      "tamasfe.even-better-toml"
      "usernamehw.errorlens"
      "WakaTime.vscode-wakatime"
    ];

    # Enable previews
    previews = {
      enable = true;
      previews = [
        # {
        #   # Example: run "npm run dev" with PORT set to IDX's defined port for previews,
        #   # and show it in IDX's web preview panel
        #   command = ["npm" "run" "dev"];
        #   manager = "web";
        #   id = "web";
        #   env = {
        #     # Environment variables to set for your server
        #     PORT = "$PORT";
        #   };
        # }
      ];
    };

    # Workspace lifecycle hooks
    workspace = {
      # Runs when a workspace is first created
      onCreate = {
        # Example: install JS dependencies from NPM
        # npm-install = 'npm install';
      };
      onStart = {
        # Example: start a background task to watch and re-build backend code
        # watch-backend = "npm run watch-backend";
      };
    };
  };
}

