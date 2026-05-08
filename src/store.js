import { reactive } from 'vue'

// 1. Check if the user is already saved in the browser's memory
const savedSession = localStorage.getItem('inkdao_session')
const initialUser = savedSession ? JSON.parse(savedSession) : {
  isLoggedIn: false,
  username: '',
  role: 'guest'
}

export const globalStore = reactive({
  
  // 2. Load the saved user (or the default guest)
  user: initialUser,

  // 3. Proper Login Function
  login(username, password) {
    // In a real app, we would check the password against a database here.
    // For this demo, we will just accept any password and log them in!
    this.user.isLoggedIn = true;
    this.user.username = username;
    
    // Secret trick: If they type 'admin' as their username, give them the admin role!
    this.user.role = username.toLowerCase() === 'admin' ? 'admin' : 'user';
    
    // Save the session to the browser memory
    localStorage.setItem('inkdao_session', JSON.stringify(this.user));
  },

  // 4. Proper Logout Function
  logout() {
    this.user.isLoggedIn = false;
    this.user.username = '';
    this.user.role = 'guest';
    
    // Wipe the browser memory
    localStorage.removeItem('inkdao_session');
  },

  // 2. Library Data
  library: [
    { id: 2, status: 'reading' },
    { id: 7, status: 'will_read' },
    { id: 12, status: 'completed' }
  ],

  toggleLibrary(novelId) {
    const index = this.library.findIndex(n => n.id === novelId)
    if (index === -1) {
      this.library.push({ id: novelId, status: 'will_read' })
    } else {
      this.library.splice(index, 1) 
    }
  },

  isInLibrary(novelId) {
    return this.library.some(n => n.id === novelId)
  },

  updateStatus(novelId, newStatus) {
    const novel = this.library.find(n => n.id === novelId)
    if (novel) {
      novel.status = newStatus
    }
  },

  getStatus(novelId) {
    const novel = this.library.find(n => n.id === novelId)
    return novel ? novel.status : 'will_read'
  }
})