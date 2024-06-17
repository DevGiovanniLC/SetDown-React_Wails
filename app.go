package main

import (
	"context"
	"log"
	"os/exec"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) Shutdown() {
	cmd := exec.Command("cmd", "/C", "shutdown", "/s", "/t", "5", "/c", "turning off in 5 seconds")
	err := cmd.Run()
	if err != nil {
		log.Fatal(err)
	}
}

func (a *App) Reboot() {
	cmd := exec.Command("cmd", "/C", "shutdown", "/r", "/t", "5", "/c", "restarting in 5 seconds")
	err := cmd.Run()
	if err != nil {
		log.Fatal(err)
	}
}

func (a *App) Hibernate() {
	cmd := exec.Command("cmd", "/C", "shutdown", "/h")
	err := cmd.Run()
	if err != nil {
		log.Fatal(err)
	}
}
