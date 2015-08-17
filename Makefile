N=[0m
G=[01;32m
Y=[01;33m
B=[01;34m

comandos:
	@echo ""
	@echo "${B}Comandos disponibles para ${G}huayra-ritmos${N}"
	@echo ""
	@echo "  ${Y}Para distribuir${N}"
	@echo ""
	@echo "    ${G}release${N}         Publica el sitio en gitpages."
	@echo ""


release:
	sh publishToGithubPages.sh
