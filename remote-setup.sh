# $ set | grep GIT
# GIT_SSH_COMMAND='ssh -i ~/.ssh/rsa_github-alternative -o IdentitiesOnly=yes'
# GIT_SSH_COMMAND_SAVED='ssh -i ~/.ssh/rsa_github-alternative -o IdentitiesOnly=yes'
export GIT_SSH_COMMAND_GH='ssh -i ~/.ssh/rsa_github-alternative -o IdentitiesOnly=yes'
export GIT_SSH_COMMAND_BB='ssh -i ~/.ssh/id_rsa_personal-github -o IdentitiesOnly=yes'

function gh_set {
  export GIT_SSH_COMMAND=$GIT_SSH_COMMAND_GH
}

function bb_set {
  export GIT_SSH_COMMAND=$GIT_SSH_COMMAND_BB
}

function ssh-sw {
  echo "Changing git SSH command from:  ${GIT_SSH_COMMAND}"
  ${1}_set
  echo "                           to:  ${GIT_SSH_COMMAND}"
}

# This was one possible way to do it, but I settled on using
# calls to the functions defined above.
# echo "Changing git SSH command from:  ${GIT_SSH_COMMAND}"
# ${1}_set
# echo "                           to:  ${GIT_SSH_COMMAND}"

# -rw-------  1 rstewar rstewar  571 Nov 29  2021 id_rsa.pub
# -rw-------  1 rstewar rstewar 2655 Nov 29  2021 id_rsa
# -rwx------  1 rstewar rstewar 2655 Dec  3  2021 id_rsa_personal-github*
# -rwx------  1 rstewar rstewar 2655 Feb 21  2023 rsa_github-alternative*
# -rw-r--r--  1 rstewar rstewar  741 Apr 20 14:53 id_rsa_4096_gitlab.pub
# -rw-------  1 rstewar rstewar 3434 Apr 20 14:53 id_rsa_4096_gitlab
# -rw-r--r--  1 rstewar rstewar 2882 Apr 20 14:59 known_hosts.old
# -rw-r--r--  1 rstewar rstewar 2882 Jun 26 14:18 known_hosts_2023-0626
# drwx------  2 rstewar rstewar 4096 Jun 26 14:38 ./
# -rw-r--r--  1 rstewar rstewar 3057 Jun 26 14:39 known_hosts
# drwxr-xr-x 59 rstewar rstewar 4096 Oct 11 10:12 ../
