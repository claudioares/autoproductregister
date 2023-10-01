import pyautogui as gui

def systemOpen():
    gui.PAUSE = 0.5
    gui.press('win')
    gui.write('chrome')
    gui.press('enter')