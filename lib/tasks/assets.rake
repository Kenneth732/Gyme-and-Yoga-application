namespace :assets do
    desc "Precompile assets"
    task :precompile do
      on roles(:web) do
        within release_path do
          execute :rake, "assets:precompile"
        end
      end
    end
  
    desc "Clean assets"
    task :clean do
      on roles(:web) do
        within release_path do
          execute :rake, "assets:clean"
        end
      end
    end
  end
  